import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { createApplication } from '@/lib/applications';
import { Loader2, CheckCircle, Upload } from 'lucide-react';

interface ApplicationFormProps {
  position?: string;
  onClose?: () => void;
}

const ApplicationForm = ({ position, onClose }: ApplicationFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: position || '',
    experience: '',
    coverLetter: '',
    cvUrl: '',
    cvFileName: ''
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cvFile) {
      alert('Por favor, selecciona un archivo CV');
      return;
    }

    try {
      setLoading(true);
      await createApplication(formData, cvFile);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: position || '',
        experience: '',
        coverLetter: '',
        cvUrl: '',
        cvFileName: ''
      });
      setCvFile(null);
      
      // Close modal after 2 seconds
      setTimeout(() => {
        setSubmitted(false);
        onClose?.();
      }, 2000);
      
    } catch (error) {
      console.error('Error al enviar aplicación:', error);
      alert('Error al enviar la aplicación. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">¡Aplicación Enviada!</h3>
          <p className="text-muted-foreground">
            Tu aplicación ha sido enviada correctamente. Te contactaremos pronto.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Aplicar a {position || 'Posición'}</CardTitle>
        <CardDescription>
          Completa el formulario y sube tu CV para aplicar a esta posición.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="position">Posición *</Label>
              <Select
                value={formData.position}
                onValueChange={(value) => setFormData(prev => ({ ...prev, position: value }))}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una posición" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Senior AI Engineer">Senior AI Engineer</SelectItem>
                  <SelectItem value="AI Product Manager">AI Product Manager</SelectItem>
                  <SelectItem value="AI Research Scientist">AI Research Scientist</SelectItem>
                  <SelectItem value="AI Solutions Architect">AI Solutions Architect</SelectItem>
                  <SelectItem value="Data Scientist">Data Scientist</SelectItem>
                  <SelectItem value="Machine Learning Engineer">Machine Learning Engineer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Experiencia *</Label>
            <Textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
              placeholder="Describe tu experiencia relevante..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter">Carta de Presentación</Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="¿Por qué te interesa trabajar con nosotros?"
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cv">CV (PDF, DOC, DOCX) *</Label>
            <div className="flex items-center gap-2">
              <Input
                id="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              {cvFile && (
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Upload className="h-4 w-4" />
                  {cvFile.name}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="flex-1"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                'Enviar Aplicación'
              )}
            </Button>
            
            {onClose && (
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={loading}
              >
                Cancelar
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ApplicationForm;