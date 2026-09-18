import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import { siteConfig } from '../config/siteData';

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};

const formatNumber = (value) => {
  return new Intl.NumberFormat('en-IN').format(value);
};

const exportToCSV = (data, filename) => {
  const headers = ['Rank', 'Name', 'Team', 'Role', 'Target (₹)', 'Achieved (₹)', 'Billed (₹)', 'Closed Deals', 'Total Deals', 'Attainment (%)'];
  
  const rows = data.map((item, index) => [
    index + 1,
    item.name,
    item.team,
    item.role,
    item.target,
    item.achieved,
    item.billed,
    item.closed,
    item.deals,
    item.attainment,
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Select = ({ value, onChange, options, className = '', style = {}, ...props }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={className}
    style={{
      padding: '10px 36px 10px 14px',
      fontSize: 13,
      fontFamily: 'var(--font-body)',
      color: 'var(--color-black)',
      background: 'var(--color-white)',
      border: '1px solid var(--color-border)',
      borderRadius: '4px',
      outline: 'none',
      cursor: 'pointer',
      appearance: 'none',
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23525252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
      backgroundSize: '16px',
      minWidth: 180,
      ...style,
    }}
    {...props}
  >
    {options.map(opt => (
      <option key={opt.value} value={opt.value}>{opt.label}</option>
    ))}
  </select>
);

const Input = ({ value, onChange, placeholder, type = 'text', style = {}, ...props }) => (
  <input
    type={type}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    style={{
      padding: '10px 14px',
      fontSize: 13,
      fontFamily: 'var(--font-body)',
      color: 'var(--color-black)',
      background: 'var(--color-white)',
      border: '1px solid var(--color-border)',
      borderRadius: '4px',
      outline: 'none',
      minWidth: 160,
      ...style,
    }}
    {...props}
  />
);

export default function SalesLeaderboard() {
  const { analytics } = siteConfig;
  const [period, setPeriod] = useState('this-month');
  const [team, setTeam] = useState('all');
  const [search, setSearch] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'attainment', direction: 'desc' });
  const [customStart, setCustomStart] = useState('');
  const [customEnd, setCustomEnd] = useState('');
  const [isExporting, setIsExporting] = useState(false);

  const filteredData = useMemo(() => {
    let data = [...analytics.leaderboardData];

    // Filter by team
    if (team !== 'all') {
      data = data.filter(item => item.team.toLowerCase().replace(' ', '') === team);
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      data = data.filter(item => 
        item.name.toLowerCase().includes(searchLower) ||
        item.team.toLowerCase().includes(searchLower) ||
        item.role.toLowerCase().includes(searchLower)
      );
    }

    // Sort
    data.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    // Add rank
    return data.map((item, index) => ({ ...item, rank: index + 1 }));
  }, [period, team, search, sortConfig]);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'desc' ? 'asc' : 'desc'
    }));
  };

  const handleExport = useCallback(async () => {
    setIsExporting(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    const periodLabel = analytics.periods.find(p => p.value === period)?.label || period;
    const teamLabel = analytics.teams.find(t => t.value === team)?.label || team;
    exportToCSV(filteredData, `sales-leaderboard-${periodLabel}-${teamLabel}-${new Date().toISOString().split('T')[0]}`);
    setIsExporting(false);
  }, [filteredData, period, team, analytics]);

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <ChevronDown size={14} color="var(--color-text-muted)" />;
    return sortConfig.direction === 'asc' ? <ChevronUp size={14} color="var(--color-black)" /> : <ChevronDown size={14} color="var(--color-black)" />;
  };

  const getAttainmentColor = (attainment) => {
    if (attainment >= 100) return 'var(--color-black)';
    if (attainment >= 90) return '#F97316';
    return '#EF4444';
  };

  const summaryStats = useMemo(() => {
    const total = filteredData.length;
    const avgAttainment = total > 0 ? Math.round(filteredData.reduce((sum, m) => sum + m.attainment, 0) / total) : 0;
    const totalTarget = filteredData.reduce((sum, m) => sum + m.target, 0);
    const totalAchieved = filteredData.reduce((sum, m) => sum + m.achieved, 0);
    const totalBilled = filteredData.reduce((sum, m) => sum + m.billed, 0);
    const totalClosed = filteredData.reduce((sum, m) => sum + m.closed, 0);
    return { total, avgAttainment, totalTarget, totalAchieved, totalBilled, totalClosed };
  }, [filteredData]);

  return (
    <section
      id="analytics"
      aria-labelledby="analytics-heading"
      className="section"
      style={{
        position: 'relative',
        background: 'var(--color-bg)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ marginBottom: '64px' }}
        >
          <span className="label label-dot" style={{ color: 'var(--color-text-muted)' }}>
            {analytics.label}
          </span>
          <h2
            id="analytics-heading"
            style={{
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--color-black)',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            {analytics.heading}
          </h2>
          <p style={{
            fontSize: 'clamp(13px, 1.2vw, 16px)',
            lineHeight: 1.7,
            color: 'var(--color-text-muted)',
            maxWidth: 600,
          }}>
            {analytics.description}
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'flex-end',
            marginBottom: '32px',
            padding: '20px',
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 180 }}>
            <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.1, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              Period
            </label>
            <Select value={period} onChange={setPeriod} options={analytics.periods} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 180 }}>
            <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.1, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              Team
            </label>
            <Select value={team} onChange={setTeam} options={analytics.teams} />
          </div>

          {period === 'custom' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 160 }}>
                <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.1, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                  Start Date
                </label>
                <Input value={customStart} onChange={setCustomStart} type="date" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 160 }}>
                <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.1, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                  End Date
                </label>
                <Input value={customEnd} onChange={setCustomEnd} type="date" />
              </div>
            </>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1, minWidth: 220 }}>
            <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.1, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              Search Member
            </label>
            <div style={{ position: 'relative' }}>
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} aria-hidden="true">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              <Input
                value={search}
                onChange={setSearch}
                placeholder="Search by name, team, role..."
                style={{ paddingLeft: '40px', width: '100%' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="btn btn-black"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
              }}
            >
              <Download size={16} aria-hidden="true" />
              {isExporting ? 'Exporting...' : 'Export CSV'}
            </button>
            <button
              onClick={() => {
                setPeriod('this-month');
                setTeam('all');
                setSearch('');
                setCustomStart('');
                setCustomEnd('');
              }}
              className="btn btn-ghost"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                fontSize: 12,
              }}
            >
              <RefreshCw size={16} aria-hidden="true" />
              Reset
            </button>
          </div>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          {[
            { label: 'Team Members', value: summaryStats.total, icon: null },
            { label: 'Avg Attainment', value: `${summaryStats.avgAttainment}%`, icon: null },
            { label: 'Total Target', value: formatCurrency(summaryStats.totalTarget).replace('₹', ''), icon: null },
            { label: 'Total Achieved', value: formatCurrency(summaryStats.totalAchieved).replace('₹', ''), icon: null },
            { label: 'Total Billed', value: formatCurrency(summaryStats.totalBilled).replace('₹', ''), icon: null },
            { label: 'Deals Closed', value: formatNumber(summaryStats.totalClosed), icon: null },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 800,
                color: 'var(--color-black)',
                fontFamily: 'var(--font-display)',
                lineHeight: 1.2,
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: 0.05,
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leaderboard Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 900 }}>
              <thead>
                <tr style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
                  {[
                    { key: 'rank', label: '#', width: '50px' },
                    { key: 'name', label: 'Member', width: '180px' },
                    { key: 'team', label: 'Team', width: '160px' },
                    { key: 'role', label: 'Role', width: '180px' },
                    { key: 'target', label: 'Target', width: '140px', sortable: true },
                    { key: 'achieved', label: 'Achieved', width: '140px', sortable: true },
                    { key: 'billed', label: 'Billed', width: '140px', sortable: true },
                    { key: 'closed', label: 'Closed', width: '100px', sortable: true },
                    { key: 'deals', label: 'Deals', width: '100px' },
                    { key: 'attainment', label: 'Attainment %', width: '140px', sortable: true },
                  ].map(col => (
                    <th
                      key={col.key}
                      style={{
                        padding: '14px 16px',
                        textAlign: col.key === 'rank' ? 'center' : 'left',
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 0.05,
                        textTransform: 'uppercase',
                        color: 'var(--color-text-muted)',
                        whiteSpace: 'nowrap',
                        cursor: col.sortable ? 'pointer' : 'default',
                        userSelect: 'none',
                        width: col.width,
                      }}
                      onClick={() => col.sortable && handleSort(col.key)}
                    >
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        {col.label}
                        {col.sortable && getSortIcon(col.key)}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((member, index) => (
                  <tr
                    key={member.id}
                    style={{
                      borderBottom: index < filteredData.length - 1 ? '1px solid var(--color-border)' : 'none',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-bg)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontSize: 13, fontWeight: 700, color: 'var(--color-text-muted)', fontFamily: 'var(--font-display)' }}>
                      {member.rank}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 14, fontWeight: 600, color: 'var(--color-black)' }}>
                      {member.name}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: 'var(--color-text-muted)' }}>
                      {member.team}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: 'var(--color-text-muted)' }}>
                      {member.role}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-display)', color: 'var(--color-black)' }}>
                      {formatCurrency(member.target)}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--color-black)' }}>
                      {formatCurrency(member.achieved)}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-display)', color: 'var(--color-text-muted)' }}>
                      {formatCurrency(member.billed)}
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--color-black)' }}>
                      {member.closed}
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontSize: 13, fontWeight: 500, color: 'var(--color-text-muted)' }}>
                      {member.deals}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-display)', color: getAttainmentColor(member.attainment) }}>
                      {member.attainment}%
                    </td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={10} style={{ padding: '60px', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                      No data found for selected filters
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Pagination Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{
            marginTop: '20px',
            padding: '16px 0',
            fontSize: 13,
            color: 'var(--color-text-muted)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>Showing {filteredData.length} of {analytics.leaderboardData.length} members</span>
          <span>Period: {analytics.periods.find(p => p.value === period)?.label || period}</span>
        </motion.div>
      </div>
    </section>
  );
}