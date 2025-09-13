import React, { useState, useEffect } from 'react';
import { 
  TicketIcon, 
  ChatBubbleLeftRightIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  EyeIcon,
  PencilIcon
} from '@heroicons/react/24/outline';

interface SupportTicket {
  id: string;
  ticketNo: string;
  subject: string;
  description: string;
  priority: number;
  status: number;
  categoryName: string;
  userEmail: string;
  createdAt: string;
  lastActivityAt: string;
  assignedAgentId?: string;
  messageCount: number;
}

interface SupportCategory {
  id: string;
  nameTr: string;
  nameEn: string;
  isActive: boolean;
}

interface TicketStats {
  totalTickets: number;
  newTickets: number;
  waitingOnAgent: number;
  waitingOnCustomer: number;
  resolved: number;
  closed: number;
}

const AdminSupport: React.FC = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [categories, setCategories] = useState<SupportCategory[]>([]);
  const [stats, setStats] = useState<TicketStats>({
    totalTickets: 0,
    newTickets: 0,
    waitingOnAgent: 0,
    waitingOnCustomer: 0,
    resolved: 0,
    closed: 0
  });
  const [loading, setLoading] = useState(true);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [newMessage, setNewMessage] = useState('');

  const API_BASE = 'https://localhost:7001/api/admin/support';

  useEffect(() => {
    loadTickets();
    loadCategories();
  }, [filterStatus, filterPriority]);

  const loadTickets = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filterStatus !== 'all') params.append('status', filterStatus);
      if (filterPriority !== 'all') params.append('priority', filterPriority);
      
      const response = await fetch(`${API_BASE}/tickets?${params}`, {
        headers: {
          'Authorization': 'Bearer YOUR_ADMIN_TOKEN_HERE' // Gerçek token gerekli
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setTickets(data.tickets || []);
        calculateStats(data.tickets || []);
      }
    } catch (error) {
      console.error('Tickets yüklenirken hata:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const response = await fetch('https://localhost:7001/api/support/categories');
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('Kategoriler yüklenirken hata:', error);
    }
  };

  const calculateStats = (ticketList: SupportTicket[]) => {
    const newStats = {
      totalTickets: ticketList.length,
      newTickets: ticketList.filter(t => t.status === 0).length,
      waitingOnAgent: ticketList.filter(t => t.status === 1).length,
      waitingOnCustomer: ticketList.filter(t => t.status === 2).length,
      resolved: ticketList.filter(t => t.status === 3).length,
      closed: ticketList.filter(t => t.status === 4).length
    };
    setStats(newStats);
  };

  const getStatusText = (status: number) => {
    switch (status) {
      case 0: return 'Yeni';
      case 1: return 'Ajanda Bekliyor';
      case 2: return 'Müşteride Bekliyor';
      case 3: return 'Çözüldü';
      case 4: return 'Kapalı';
      default: return 'Bilinmiyor';
    }
  };

  const getStatusColor = (status: number) => {
    switch (status) {
      case 0: return 'bg-blue-100 text-blue-800';
      case 1: return 'bg-yellow-100 text-yellow-800';
      case 2: return 'bg-orange-100 text-orange-800';
      case 3: return 'bg-green-100 text-green-800';
      case 4: return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityText = (priority: number) => {
    switch (priority) {
      case 0: return 'Düşük';
      case 1: return 'Normal';
      case 2: return 'Yüksek';
      case 3: return 'Acil';
      default: return 'Bilinmiyor';
    }
  };

  const getPriorityColor = (priority: number) => {
    switch (priority) {
      case 0: return 'bg-gray-100 text-gray-800';
      case 1: return 'bg-blue-100 text-blue-800';
      case 2: return 'bg-orange-100 text-orange-800';
      case 3: return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const sendMessage = async (ticketId: string) => {
    if (!newMessage.trim()) return;

    try {
      const response = await fetch(`${API_BASE}/tickets/${ticketId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_ADMIN_TOKEN_HERE'
        },
        body: JSON.stringify({
          body: newMessage,
          isInternal: false
        })
      });

      if (response.ok) {
        setNewMessage('');
        loadTickets();
        alert('Mesaj gönderildi!');
      }
    } catch (error) {
      console.error('Mesaj gönderilirken hata:', error);
      alert('Mesaj gönderilemedi!');
    }
  };

  const updateTicketStatus = async (ticketId: string, status: number) => {
    try {
      const response = await fetch(`${API_BASE}/tickets/${ticketId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_ADMIN_TOKEN_HERE'
        },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        loadTickets();
        alert('Ticket durumu güncellendi!');
      }
    } catch (error) {
      console.error('Ticket güncellenirken hata:', error);
      alert('Ticket güncellenemedi!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <TicketIcon className="h-8 w-8 text-purple-600 mr-3" />
                Destek Yönetim Paneli
              </h1>
              <p className="text-gray-600 mt-2">DailyPositive Destek Sistemi Admin Paneli</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={loadTickets}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Yenile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* İstatistikler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center">
              <TicketIcon className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Toplam</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalTickets}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center">
              <ClockIcon className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Yeni</p>
                <p className="text-2xl font-bold text-blue-600">{stats.newTickets}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
            <div className="flex items-center">
              <UserGroupIcon className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Ajanda Bekliyor</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.waitingOnAgent}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center">
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Müşteride Bekliyor</p>
                <p className="text-2xl font-bold text-orange-600">{stats.waitingOnCustomer}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Çözüldü</p>
                <p className="text-2xl font-bold text-green-600">{stats.resolved}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gray-500">
            <div className="flex items-center">
              <XCircleIcon className="h-8 w-8 text-gray-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Kapalı</p>
                <p className="text-2xl font-bold text-gray-600">{stats.closed}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filtreler */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Durum Filtresi</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">Tümü</option>
                <option value="0">Yeni</option>
                <option value="1">Ajanda Bekliyor</option>
                <option value="2">Müşteride Bekliyor</option>
                <option value="3">Çözüldü</option>
                <option value="4">Kapalı</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Öncelik Filtresi</label>
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">Tümü</option>
                <option value="0">Düşük</option>
                <option value="1">Normal</option>
                <option value="2">Yüksek</option>
                <option value="3">Acil</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={loadTickets}
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Filtrele
              </button>
            </div>
          </div>
        </div>

        {/* Ticket Listesi */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Destek Ticket'ları</h2>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Ticket'lar yükleniyor...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ticket No
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Konu
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kullanıcı
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kategori
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Durum
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Öncelik
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tarih
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      İşlemler
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tickets.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{ticket.ticketNo}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">{ticket.subject}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{ticket.userEmail}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{ticket.categoryName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                          {getStatusText(ticket.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(ticket.priority)}`}>
                          {getPriorityText(ticket.priority)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(ticket.createdAt).toLocaleDateString('tr-TR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedTicket(ticket)}
                            className="text-purple-600 hover:text-purple-900"
                          >
                            <EyeIcon className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => updateTicketStatus(ticket.id, 1)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <PencilIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {tickets.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  <TicketIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Henüz ticket bulunmuyor.</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Ticket Detay Modal */}
        {selectedTicket && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  Ticket Detayı: {selectedTicket.ticketNo}
                </h3>
                <button
                  onClick={() => setSelectedTicket(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircleIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Konu</h4>
                    <p className="text-gray-700">{selectedTicket.subject}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Kullanıcı</h4>
                    <p className="text-gray-700">{selectedTicket.userEmail}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Kategori</h4>
                    <p className="text-gray-700">{selectedTicket.categoryName}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Oluşturulma Tarihi</h4>
                    <p className="text-gray-700">{new Date(selectedTicket.createdAt).toLocaleString('tr-TR')}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Açıklama</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 whitespace-pre-wrap">{selectedTicket.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Yanıt Gönder</h4>
                  <div className="space-y-4">
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Yanıtınızı buraya yazın..."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      rows={4}
                    />
                    <div className="flex space-x-4">
                      <button
                        onClick={() => sendMessage(selectedTicket.id)}
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        Mesaj Gönder
                      </button>
                      <button
                        onClick={() => updateTicketStatus(selectedTicket.id, 3)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Çözüldü Olarak İşaretle
                      </button>
                      <button
                        onClick={() => updateTicketStatus(selectedTicket.id, 4)}
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Kapat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSupport;
