import React, { useState } from 'react';
import { Target, LayoutTemplate, Users, Zap, Mic, Briefcase, HeartCrack, TrendingUp } from 'lucide-react';

type Tab = 'perfil' | 'canvas';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('perfil');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Caso de Estudio: Zaple</h1>
            </div>
            
            {/* Navigation Tabs */}
            <nav className="flex space-x-2 bg-blue-800/50 p-1.5 rounded-xl overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveTab('perfil')}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 whitespace-nowrap ${
                  activeTab === 'perfil' ? 'bg-white text-blue-900 shadow-sm' : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Perfil de Cliente</span>
              </button>
              <button
                onClick={() => setActiveTab('canvas')}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 whitespace-nowrap ${
                  activeTab === 'canvas' ? 'bg-white text-blue-900 shadow-sm' : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                }`}
              >
                <LayoutTemplate className="w-4 h-4" />
                <span>Business Model Canvas</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === 'perfil' && <PerfilClienteRadial />}
        {activeTab === 'canvas' && <BusinessModelCanvas />}
      </main>
    </div>
  );
}

function PerfilClienteRadial() {
  // Datos para el diagrama radial
  const nodes = [
    // Trabajos (Jobs)
    { id: 1, type: 'job', text: 'Definir un tema del cual hablar', isTarget: false },
    { id: 2, type: 'job', text: 'Estar al tanto de las últimas tendencias en su nicho', isTarget: false },
    { id: 3, type: 'job', text: 'Preparar una charla de 1 hora para un medio o evento', isTarget: false },
    { id: 4, type: 'job', text: 'Vender su charla', isTarget: false },
    { id: 5, type: 'job', text: 'Escribir y promocionar su libro', isTarget: false },
    { id: 6, type: 'job', text: 'Vender su consultoría o agencia', isTarget: false },
    { id: 7, type: 'job', text: 'Transportarse hacia eventos y medios', isTarget: false },
    { id: 8, type: 'job', text: 'Llevar su agenda de eventos', isTarget: false },
    { id: 9, type: 'job', text: 'Cerrar tratos, negociar precios y cobrar sus charlas', isTarget: false },
    { id: 10, type: 'job', text: 'Llevar su mensaje al público objetivo de su perfil', isTarget: true },
    { id: 11, type: 'job', text: 'Generar conciencia e impacto positivo en la sociedad', isTarget: true },
    { id: 12, type: 'job', text: 'Ser percibido como profesional y como autoridad en su rubro', isTarget: true },
    
    // Ganancias (Gains)
    { id: 13, type: 'gain', text: 'Conseguir un nuevo sponsor', isTarget: false },
    { id: 14, type: 'gain', text: 'Encontrar nuevos puntos de vista o ideas para compartir', isTarget: false },
    { id: 15, type: 'gain', text: 'Participar en espacios con personalidades importantes o conocidas', isTarget: false },
    { id: 16, type: 'gain', text: 'Impactar positivamente en la vida de alguien', isTarget: true },
    { id: 17, type: 'gain', text: 'Que su mensaje sea recibido por la gente indicada', isTarget: true },
    { id: 18, type: 'gain', text: 'Aumentar sus clientes de charlas, libros, servicios, etc.', isTarget: true },
    { id: 19, type: 'gain', text: 'Que la gente se inspire con su mensaje y lo comparta', isTarget: true },
    { id: 20, type: 'gain', text: 'Alcanzar a un gran número de personas con su mensaje', isTarget: true },
    { id: 29, type: 'gain', text: 'Que sus ideas resulten innovadoras', isTarget: false },
    { id: 30, type: 'gain', text: 'Ser nominado a premiaciones', isTarget: true },
    
    // Dolores (Pains)
    { id: 21, type: 'pain', text: 'Tiempos de viaje largos hacia donde son sus charlas', isTarget: false },
    { id: 22, type: 'pain', text: 'Imposible responder a todos los DM que recibe', isTarget: false },
    { id: 23, type: 'pain', text: 'Ruido en medios impide detectar tendencias y temas importantes facilmente', isTarget: false },
    { id: 24, type: 'pain', text: 'Falta de inspiración', isTarget: false },
    { id: 25, type: 'pain', text: 'Desconocimiento sobre el funcionamiento de los nuevos medios digitales', isTarget: true },
    { id: 26, type: 'pain', text: 'Recibir comentarios de odio', isTarget: false },
    { id: 27, type: 'pain', text: 'Que cuestionen la veracidad de sus dichos', isTarget: true },
    { id: 28, type: 'pain', text: 'Presencia digital es compleja y lleva tiempo', isTarget: true },
  ].map((node, index, array) => {
    const angle = (index * 360) / array.length;
    const radius = index % 2 === 0 ? 28 : 42;
    return { ...node, angle, radius };
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-3xl mx-auto mb-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Perfil del Cliente: El Speaker</h2>
        <p className="text-slate-600 text-lg">
          Mapa visual de los trabajos, dolores y ganancias del cliente. Los elementos resaltados son aquellos que la propuesta de valor de <strong>Zaple</strong> resuelve directamente.
        </p>
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap justify-center gap-6 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-400"></div>
          <span className="text-sm font-medium text-slate-700">Trabajos (Jobs)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-red-100 border-2 border-red-400"></div>
          <span className="text-sm font-medium text-slate-700">Dolores (Pains)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-emerald-100 border-2 border-emerald-400"></div>
          <span className="text-sm font-medium text-slate-700">Ganancias (Gains)</span>
        </div>
        <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-slate-300">
          <div className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-[0_0_8px_rgba(168,85,247,0.8)] font-black text-[10px]">
            Z
          </div>
          <span className="text-sm font-bold text-slate-900">Resuelto por Zaple</span>
        </div>
      </div>

      {/* Contenedor del Diagrama Radial */}
      <div className="w-full overflow-x-auto pb-16 pt-16 hide-scrollbar">
        <div className="relative w-[1000px] h-[1000px] mx-auto bg-white rounded-full shadow-[inset_0_0_50px_rgba(0,0,0,0.02)] border border-slate-100 mt-8">
          
          {/* Líneas SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {nodes.map(node => {
              const x = 50 + node.radius * Math.cos(node.angle * Math.PI / 180);
              const y = 50 + node.radius * Math.sin(node.angle * Math.PI / 180);
              return (
                <line 
                  key={`line-${node.id}`}
                  x1="50%" y1="50%" 
                  x2={`${x}%`} y2={`${y}%`} 
                  stroke={node.isTarget ? '#a855f7' : '#cbd5e1'} 
                  strokeWidth={node.isTarget ? "3" : "1.5"}
                  strokeDasharray={node.isTarget ? "none" : "4 4"}
                  className={node.isTarget ? "drop-shadow-[0_0_3px_rgba(168,85,247,0.4)]" : ""}
                />
              );
            })}
          </svg>

          {/* Esferas (Nodos) */}
          {nodes.map(node => {
            const x = 50 + node.radius * Math.cos(node.angle * Math.PI / 180);
            const y = 50 + node.radius * Math.sin(node.angle * Math.PI / 180);
            
            let bgColor = '';
            let icon = null;
            if (node.type === 'gain') {
              bgColor = 'bg-emerald-100 border-emerald-500 text-emerald-950';
              icon = <TrendingUp className="w-4 h-4 mb-1 text-emerald-700 opacity-70" />;
            }
            if (node.type === 'pain') {
              bgColor = 'bg-red-100 border-red-500 text-red-950';
              icon = <HeartCrack className="w-4 h-4 mb-1 text-red-700 opacity-70" />;
            }
            if (node.type === 'job') {
              bgColor = 'bg-blue-100 border-blue-500 text-blue-950';
              icon = <Briefcase className="w-4 h-4 mb-1 text-blue-700 opacity-70" />;
            }

            const targetStyles = node.isTarget 
              ? 'ring-4 ring-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] border-purple-600 scale-110 z-10 font-bold' 
              : 'border-2 opacity-90 hover:opacity-100 hover:scale-105 z-0 font-medium';

            return (
              <div 
                key={node.id}
                className={`absolute w-28 h-28 rounded-full flex flex-col items-center justify-center p-2 text-center text-[10px] sm:text-xs transition-all duration-300 cursor-default ${bgColor} ${targetStyles}`}
                style={{ top: `${y}%`, left: `${x}%`, transform: 'translate(-50%, -50%)' }}
              >
                {node.isTarget && (
                  <div className="absolute -top-2 -right-2 bg-purple-600 text-white w-6 h-6 flex items-center justify-center rounded-full shadow-lg border-2 border-white font-black text-xs">
                    Z
                  </div>
                )}
                {icon}
                <span className="leading-tight">{node.text}</span>
              </div>
            );
          })}

          {/* Nodo Central (El Cliente) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-slate-900 text-white rounded-full flex flex-col items-center justify-center shadow-2xl z-20 border-8 border-white">
            <div className="absolute inset-0 rounded-full border-4 border-slate-800 opacity-50"></div>
            <Mic className="w-12 h-12 mb-2 text-blue-400" />
            <span className="font-bold text-xl tracking-wide">El Speaker</span>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Cliente Ideal</span>
          </div>

        </div>
      </div>
    </div>
  );
}

function BusinessModelCanvas() {
  const canvasData = [
    {
      id: 'partners',
      title: 'Socios Clave',
      detail: 'Organizadores de eventos y congresos son fundamentales, ya que proveen el ecosistema ideal para prospectar clientes presencialmente. De manera indirecta, los algoritmos de Instagram, TikTok y YouTube Shorts actúan como socios tecnológicos, ya que nuestro servicio está optimizado para complacer sus métricas de retención.',
      colSpan: 'col-span-2',
      rowSpan: 'row-span-2'
    },
    {
      id: 'activities',
      title: 'Actividades Clave',
      detail: '1. Prospección activa (contacto vía LinkedIn y asistencia a eventos presenciales). 2. Curaduría estratégica y recorte del material en crudo (encontrar el mensaje clave). 3. Edición de video profesional de alto impacto (subtítulos, música, b-roll, SFX). 4. Gestión de proyectos, comunicación diaria por WhatsApp y revisión de feedback vía Frame.io/Notion.',
      colSpan: 'col-span-2',
      rowSpan: 'row-span-1'
    },
    {
      id: 'value',
      title: 'Propuesta de Valor',
      detail: '1) Servicio punta a punta que automatiza el proceso de selección de material y edición, el speaker no se esfuerza más que en recibir el material listo para publicar y revisarlo. 2) Calidad visual premium y muy cuidada, prestando atención al detalle de lo que se comunica para proteger la reputación del speaker. 3) Ingeniería de viralidad: recortes estratégicos pensados para retener a la audiencia, logrando que los videos rindan entre el doble y 100 veces más que ediciones estándar.',
      colSpan: 'col-span-2',
      rowSpan: 'row-span-2'
    },
    {
      id: 'relationships',
      title: 'Relación con el Cliente',
      detail: 'Ofrecemos un servicio "Done for You" (Hecho para ti) sumamente cercano, directo y ágil. La comunicación es 1 a 1 y se realiza de manera fluida hablando con nuestro equipo a través de grupos de WhatsApp, garantizando respuestas rápidas y confianza total.',
      colSpan: 'col-span-2',
      rowSpan: 'row-span-1'
    },
    {
      id: 'segments',
      title: 'Segmentos de Cliente',
      detail: 'Speakers, autores, referentes y divulgadores que poseen gran volumen de contenido largo pregrabado (conferencias, podcasts, entrevistas en YouTube) y buscan crecer en redes sociales. Incluye perfiles B2B que buscan autoridad/ventas (ej. Jonatan Loidi, Ale Melamed) y perfiles masivos que buscan alcance cultural (ej. Santiago Bilinkis, Mateo Salvatto).',
      colSpan: 'col-span-2',
      rowSpan: 'row-span-2'
    },
    {
      id: 'resources',
      title: 'Recursos Clave',
      detail: 'Humanos: Equipo especializado dividido entre "recortadores" (expertos en mensaje y retención) y "editores" (expertos visuales), además de un perfil comercial. Físicos/Tecnológicos: Oficina de trabajo, licencias de software de edición avanzado, y suscripciones a plataformas de gestión (Notion, Frame.io).',
      colSpan: 'col-span-2',
      rowSpan: 'row-span-1'
    },
    {
      id: 'channels',
      title: 'Canales',
      detail: 'Adquisición: El método más efectivo es la asistencia presencial a eventos de speakers. También utilizamos prospección Outbound por LinkedIn (contactar y ofrecer ayuda al ver su material). Entrega y Operación: Grupos de WhatsApp para el día a día, Notion para organización y Frame.io para revisión de videos.',
      colSpan: 'col-span-2',
      rowSpan: 'row-span-1'
    },
    {
      id: 'costs',
      title: 'Estructura de Costos',
      detail: 'Costos fijos principales: Salarios de la mano de obra (recortadores y editores), salario del perfil comercial, alquiler de la oficina, seguros de la oficina y gastos de administración. Costos variables/tecnológicos: Licencias de software de edición de video y suscripciones mensuales a plataformas de gestión (Notion, Frame.io).',
      colSpan: 'col-span-5',
      rowSpan: 'row-span-1'
    },
    {
      id: 'revenue',
      title: 'Fuentes de Ingresos',
      detail: 'El modelo de monetización es por suscripción mensual (Retainer). Se cobra una tarifa fija mensual a cambio de entregarle al cliente una cantidad específica de videos editados. Existen diferentes Tiers de servicio: tarifas para 4 Shorts entregados al mes, 8 Shorts entregados al mes, o 12 Shorts entregados al mes.',
      colSpan: 'col-span-5',
      rowSpan: 'row-span-1'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Business Model Canvas</h2>
        <p className="text-slate-600 text-lg mb-6">
          Modelo de negocio detallado de Zaple: Agencia de edición estratégica para speakers.
        </p>
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-left shadow-sm">
          <p className="text-purple-900 leading-relaxed text-sm sm:text-base">
            <strong>Nota de Luigi:</strong> En morado están resaltados los que yo considero los 3 bloques más importantes: <strong>Segmentos de clientes</strong> bien definidos que comparten una necesidad clara y bien definida. <strong>Propuesta de valor</strong> que satisface la necesidad del cliente superando otras alternativas (como editores freelance o agencias no especializadas en este caso). Y por último un <strong>modo de generar ingresos</strong> (cuanto mejor pensado esté más viable es el negocio, por ejemplo en el caso de Zaple vender packs de videos mensuales permite retener al cliente y generar relaciones a largo plazo).
          </p>
        </div>
      </div>

      {/* Flex/Grid Layout for Canvas */}
      <div className="flex flex-col gap-4">
        {/* Top Half */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
          <CanvasBlock data={canvasData[0]} className="md:col-span-2" />
          <div className="md:col-span-2 flex flex-col gap-4">
            <CanvasBlock data={canvasData[1]} className="flex-1" />
            <CanvasBlock data={canvasData[5]} className="flex-1" />
          </div>
          <CanvasBlock data={canvasData[2]} className="md:col-span-2" isHighlighted={true} />
          <div className="md:col-span-2 flex flex-col gap-4">
            <CanvasBlock data={canvasData[3]} className="flex-1" />
            <CanvasBlock data={canvasData[6]} className="flex-1" />
          </div>
          <CanvasBlock data={canvasData[4]} className="md:col-span-2" isHighlighted={true} />
        </div>

        {/* Bottom Half */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CanvasBlock data={canvasData[7]} />
          <CanvasBlock data={canvasData[8]} isHighlighted={true} />
        </div>
      </div>
    </div>
  );
}

function CanvasBlock({ data, className = '', isHighlighted = false }: { data: any, className?: string, isHighlighted?: boolean }) {
  const baseBg = isHighlighted ? 'bg-purple-50 border-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'bg-white border-slate-200 shadow-sm';
  const titleColor = isHighlighted ? 'text-purple-900 border-purple-200' : 'text-slate-900 border-slate-100';
  
  return (
    <div className={`border rounded-xl p-5 flex flex-col h-full ${baseBg} ${className}`}>
      <h4 className={`font-bold mb-3 text-sm uppercase tracking-wider border-b pb-2 ${titleColor}`}>{data.title}</h4>
      <p className="text-slate-700 text-sm leading-relaxed flex-grow">{data.detail}</p>
    </div>
  );
}
