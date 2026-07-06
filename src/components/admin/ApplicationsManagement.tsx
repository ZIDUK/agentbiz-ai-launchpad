import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Search, 
  Mail, 
  Phone, 
  FileText, 
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  User,
  Calendar
} from 'lucide-react';
import { 
  subscribeToApplications, 
  updateApplicationStatus, 
  deleteApplication,
  Application 
} from '@/lib/applications';

export function ApplicationsManagement() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [positionFilter, setPositionFilter] = useState('all');
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const unsubscribe = subscribeToApplications((apps) => {
      setApplications(apps);
    });

    return () => unsubscribe();
  }, []);

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    const matchesPosition = positionFilter === 'all' || app.position === positionFilter;
    return matchesSearch && matchesStatus && matchesPosition;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted': return 'text-green-600 bg-green-100 border-green-300';
      case 'interviewed': return 'text-purple-600 bg-purple-100 border-purple-300';
      case 'reviewed': return 'text-blue-600 bg-blue-100 border-blue-300';
      case 'rejected': return 'text-red-600 bg-red-100 border-red-300';
      case 'pending': return 'text-yellow-600 bg-yellow-100 border-yellow-300';
      default: return 'text-gray-600 bg-gray-100 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted': return <CheckCircle className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const handleStatusUpdate = async (id: string, status: Application['status']) => {
    try {
      await updateApplicationStatus(id, status, notes);
      setNotes('');
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta aplicación?')) {
      try {
        await deleteApplication(id);
      } catch (error) {
        console.error('Error deleting application:', error);
      }
    }
  };

  const downloadCV = (url: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const positions = [...new Set(applications.map(app => app.position))];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Gestión de Aplicaciones</h2>
          <p className="text-muted-foreground">Gestiona las aplicaciones de trabajo recibidas</p>
        </div>
        <Badge className="bg-blue-100 text-blue-700 border-blue-300">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
          {applications.length} Aplicaciones
        </Badge>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar por nombre, email o posición..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="pending">Pendiente</SelectItem>
                <SelectItem value="reviewed">Revisado</SelectItem>
                <SelectItem value="interviewed">Entrevistado</SelectItem>
                <SelectItem value="accepted">Aceptado</SelectItem>
                <SelectItem value="rejected">Rechazado</SelectItem>
              </SelectContent>
            </Select>
            <Select value={positionFilter} onValueChange={setPositionFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filtrar por posición" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las posiciones</SelectItem>
                {positions.map(position => (
                  <SelectItem key={position} value={position}>{position}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <div className="grid gap-6">
        {filteredApplications.map((application) => (
          <Card key={application.id} className="card-hover">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{application.name}</h3>
                    <p className="text-muted-foreground">{application.position}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {application.email}
                      </span>
                      {application.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {application.phone}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {application.applied_at.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Estado</p>
                    <Badge className={`${getStatusColor(application.status)} mb-2`}>
                      <span className="flex items-center gap-1">
                        {getStatusIcon(application.status)}
                        {application.status}
                      </span>
                    </Badge>
                    <p className="text-xs text-muted-foreground">
                      Experiencia: {application.experience}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">CV</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadCV(application.cv_url, application.cv_file_name)}
                      className="mb-2"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Descargar CV
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      {application.cv_file_name}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedApplication(application)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Ver Detalles
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Detalles de la Aplicación</DialogTitle>
                      </DialogHeader>
                      {selectedApplication && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium">Nombre</label>
                              <p className="text-sm text-muted-foreground">{selectedApplication.name}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Email</label>
                              <p className="text-sm text-muted-foreground">{selectedApplication.email}</p>
                            </div>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium">Experiencia</label>
                            <p className="text-sm text-muted-foreground">{selectedApplication.experience}</p>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium">Carta de Presentación</label>
                            <p className="text-sm text-muted-foreground">{selectedApplication.cover_letter || 'No proporcionada'}</p>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium">Notas</label>
                            <Textarea
                              value={notes}
                              onChange={(e) => setNotes(e.target.value)}
                              placeholder="Agregar notas sobre el candidato..."
                              rows={3}
                            />
                          </div>
                          
                          <div className="flex gap-2">
                            <Button
                              onClick={() => handleStatusUpdate(selectedApplication.id!, 'accepted')}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              Aceptar
                            </Button>
                            <Button
                              onClick={() => handleStatusUpdate(selectedApplication.id!, 'interviewed')}
                              variant="outline"
                            >
                              Entrevistar
                            </Button>
                            <Button
                              onClick={() => handleStatusUpdate(selectedApplication.id!, 'rejected')}
                              variant="destructive"
                            >
                              Rechazar
                            </Button>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(application.id!)}
                  >
                    <XCircle className="h-4 w-4 mr-1" />
                    Eliminar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredApplications.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No hay aplicaciones</h3>
            <p className="text-muted-foreground">No se encontraron aplicaciones con los filtros seleccionados.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}