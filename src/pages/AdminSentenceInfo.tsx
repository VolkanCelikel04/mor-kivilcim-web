import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { sentenceInfoService, SentenceInfoRow } from '../services/apiService';
import { useAdminNoIndex } from '../hooks/useAdminNoIndex';
import { useSessionTimeout } from '../hooks/useSessionTimeout';
import { ArrowRightOnRectangleIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const AdminSentenceInfo: React.FC = () => {
  useAdminNoIndex();
  const { token, logout, user } = useAuth();
  useSessionTimeout();

  const [sHead, setSHead] = useState('');
  const [sDetail, setSDetail] = useState('');
  const [sDate, setSDate] = useState('');
  const [sState, setSState] = useState<number>(1);
  const [items, setItems] = useState<SentenceInfoRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);

  const load = useCallback(async () => {
    if (!token) return;
    try {
      setLoading(true);
      const res = await sentenceInfoService.list(token, 80);
      const data = res.data as { success?: boolean; items?: SentenceInfoRow[] } | undefined;
      if (data?.items) setItems(data.items);
    } catch (e) {
      setMessage({ type: 'err', text: 'Liste yüklenemedi.' });
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    void load();
  }, [load]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (!token) return;
    if (!sHead.trim() && !sDetail.trim()) {
      setMessage({ type: 'err', text: 'Başlık veya detaydan en az biri dolu olmalı.' });
      return;
    }
    try {
      setSaving(true);
      const res = await sentenceInfoService.create(token, {
        sHead: sHead.trim() || undefined,
        sDetail: sDetail.trim() || undefined,
        sDate: sDate ? new Date(sDate).toISOString() : undefined,
        sState,
      });
      const data = res.data as { success?: boolean; id?: number } | undefined;
      if (data?.success) {
        setMessage({ type: 'ok', text: `Kayıt eklendi (Id: ${data.id ?? '—'})` });
        setSHead('');
        setSDetail('');
        setSDate('');
        setSState(1);
        await load();
      } else {
        setMessage({ type: 'err', text: 'Kayıt eklenemedi.' });
      }
    } catch {
      setMessage({ type: 'err', text: 'Kayıt eklenirken hata oluştu.' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SentenceInfo</h1>
            <p className="text-sm text-gray-600 mt-1">
              Olumlu cümle / afirmasyon havuzu — {user?.email}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/admin/support"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
              Destek paneli
            </Link>
            <button
              type="button"
              onClick={() => logout()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              Çıkış
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Yeni kayıt</h2>
          {message && (
            <div
              className={`mb-4 px-4 py-3 rounded-lg text-sm ${
                message.type === 'ok' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {message.text}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">S_Head (başlık)</label>
              <input
                type="text"
                value={sHead}
                onChange={(e) => setSHead(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Kısa başlık"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">S_Detail (metin)</label>
              <textarea
                value={sDetail}
                onChange={(e) => setSDetail(e.target.value)}
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Cümle / afirmasyon metni"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">S_Date (isteğe bağlı)</label>
                <input
                  type="datetime-local"
                  value={sDate}
                  onChange={(e) => setSDate(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Boş bırakılırsa sunucu UTC zamanı kullanılır.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">S_State</label>
                <select
                  value={sState}
                  onChange={(e) => setSState(Number(e.target.value))}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value={1}>1 — aktif</option>
                  <option value={0}>0 — pasif</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              disabled={saving}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 disabled:bg-gray-400"
            >
              {saving ? 'Kaydediliyor…' : 'Tabloya yaz'}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Son kayıtlar</h2>
            <button
              type="button"
              onClick={() => void load()}
              className="text-sm text-purple-600 hover:text-purple-800 font-medium"
            >
              Yenile
            </button>
          </div>
          {loading ? (
            <div className="p-12 text-center text-gray-500">Yükleniyor…</div>
          ) : items.length === 0 ? (
            <div className="p-12 text-center text-gray-500">Henüz kayıt yok veya liste boş.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-left text-gray-600">
                  <tr>
                    <th className="px-4 py-3 font-medium">Id</th>
                    <th className="px-4 py-3 font-medium">S_Head</th>
                    <th className="px-4 py-3 font-medium">S_Detail</th>
                    <th className="px-4 py-3 font-medium">S_Date</th>
                    <th className="px-4 py-3 font-medium">S_State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {items.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50/80">
                      <td className="px-4 py-3 whitespace-nowrap text-gray-700">{row.id}</td>
                      <td className="px-4 py-3 max-w-[180px] truncate text-gray-800" title={row.sHead ?? ''}>
                        {row.sHead ?? '—'}
                      </td>
                      <td className="px-4 py-3 max-w-md truncate text-gray-600" title={row.sDetail ?? ''}>
                        {row.sDetail ?? '—'}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-gray-600 text-xs">
                        {row.sDate != null ? String(row.sDate) : '—'}
                      </td>
                      <td className="px-4 py-3">{row.sState ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSentenceInfo;
