'use client';

import { useApp } from '../context/AppContext';

export default function Toast() {
  const { toast } = useApp();

  if (!toast) return null;

  return (
    <div className={`toast toast-${toast.type}`} key={toast.id}>
      <div className="toast-icon">
        {toast.type === 'success' && '✓'}
        {toast.type === 'error' && '✕'}
        {toast.type === 'info' && 'ℹ'}
      </div>
      <span>{toast.message}</span>
    </div>
  );
}
