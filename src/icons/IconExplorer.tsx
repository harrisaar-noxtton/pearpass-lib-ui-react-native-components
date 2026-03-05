import React, { useState, useMemo } from 'react';

export const IconExplorer = ({ icons }: { icons: Record<string, React.ComponentType> }) => {
    const [search, setSearch] = useState('');

    const filteredIcons = useMemo(() => {
        return Object.keys(icons).filter((name) =>
            name.toLowerCase().includes(search.toLowerCase())
        );
    }, [icons, search]);

    return (
        <div style={{ width: '100%', marginTop: '20px' }}>
            <input
                type="text"
                placeholder="Search icons..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: '100%',
                    padding: '12px 16px',
                    marginBottom: '32px',
                    fontSize: '16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    boxSizing: 'border-box',
                    outline: 'none'
                }}
            />

            {filteredIcons.length === 0 ? (
                <p style={{ color: '#6b7280', textAlign: 'center', padding: '40px' }}>
                    No icons found matching "{search}"
                </p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
                    {filteredIcons.map((name) => {
                        const IconComponent = icons[name];
                        return (
                            <div
                                key={name}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: '24px 16px',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    backgroundColor: '#fff',
                                    transition: 'box-shadow 0.2s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                            >
                                <div style={{ fontSize: '32px', marginBottom: '16px', color: '#374151', display: 'flex' }}>
                                    <IconComponent />
                                </div>
                                <span style={{
                                    fontSize: '12px',
                                    color: '#4b5563',
                                    textAlign: 'center',
                                    wordBreak: 'break-word',
                                    userSelect: 'all',
                                    fontFamily: 'monospace'
                                }}>
                                    {name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
