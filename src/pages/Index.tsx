import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const components = [
    {
      name: "Arduino UNO",
      voltage: "5V",
      current: "50 мА",
      pins: "ATmega328P",
      description: "Основной микроконтроллер"
    },
    {
      name: "DHT22",
      voltage: "3.3-5V",
      current: "2.5 мА",
      pins: "Pin 2",
      description: "Датчик температуры и влажности"
    },
    {
      name: "LCD 16x2 (I2C)",
      voltage: "5V",
      current: "20 мА",
      pins: "SDA, SCL (A4, A5)",
      description: "Символьный дисплей 16x2"
    },
    {
      name: "Реле (Relay)",
      voltage: "5V",
      current: "70 мА",
      pins: "Pin 13",
      description: "Модуль реле 1-канальный"
    },
    {
      name: "Потенциометр 10кОм",
      voltage: "5V",
      current: "< 1 мА",
      pins: "A0 (Analog)",
      description: "Регулятор для ручного управления"
    }
  ];

  const connections = [
    { from: "Arduino 5V", to: "DHT22 VCC", color: "bg-red-500" },
    { from: "Arduino GND", to: "DHT22 GND", color: "bg-zinc-700" },
    { from: "Arduino Pin 2", to: "DHT22 DATA", color: "bg-green-500" },
    { from: "Arduino 5V", to: "LCD VCC", color: "bg-red-500" },
    { from: "Arduino GND", to: "LCD GND", color: "bg-zinc-700" },
    { from: "Arduino A4 (SDA)", to: "LCD SDA", color: "bg-blue-500" },
    { from: "Arduino A5 (SCL)", to: "LCD SCL", color: "bg-yellow-500" },
    { from: "Arduino 5V", to: "Relay VCC", color: "bg-red-500" },
    { from: "Arduino GND", to: "Relay GND", color: "bg-zinc-700" },
    { from: "Arduino Pin 13", to: "Relay IN", color: "bg-purple-500" },
    { from: "Arduino 5V", to: "Potentiometer VCC", color: "bg-red-500" },
    { from: "Arduino GND", to: "Potentiometer GND", color: "bg-zinc-700" },
    { from: "Arduino A0", to: "Potentiometer OUT", color: "bg-orange-500" }
  ];

  const powerSpecs = {
    totalVoltage: "5V",
    totalCurrent: "143.5 мА",
    powerSupply: "USB / Внешний блок питания 7-12V"
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="border-b border-border pb-6">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Cpu" size={32} className="text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Принципиальная схема подключения</h1>
          </div>
          <p className="text-muted-foreground text-sm">
            Система мониторинга с датчиками и автоматическим управлением
          </p>
          <div className="flex gap-2 mt-4">
            <Badge variant="outline" className="text-xs">ГОСТ 2.701-2008</Badge>
            <Badge variant="outline" className="text-xs">Arduino UNO R3</Badge>
          </div>
        </header>

        <Card className="p-8 bg-card border-border">
          <div className="flex items-center gap-2 mb-6">
            <Icon name="Network" size={20} className="text-primary" />
            <h2 className="text-xl font-semibold">Схема подключения</h2>
          </div>
          
          <div className="bg-background border-2 border-border rounded p-8 relative overflow-hidden">
            <svg viewBox="0 0 800 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#0EA5E9" />
                </marker>
              </defs>

              <rect x="300" y="200" width="200" height="200" fill="none" stroke="#fff" strokeWidth="2" />
              <text x="400" y="190" textAnchor="middle" fill="#0EA5E9" fontSize="16" fontWeight="bold">Arduino UNO</text>
              
              <circle cx="320" cy="220" r="4" fill="#ef4444" />
              <text x="340" y="225" fill="#aaa" fontSize="10">5V</text>
              
              <circle cx="320" cy="240" r="4" fill="#71717a" />
              <text x="340" y="245" fill="#aaa" fontSize="10">GND</text>
              
              <circle cx="320" cy="260" r="4" fill="#22c55e" />
              <text x="340" y="265" fill="#aaa" fontSize="10">D2</text>
              
              <circle cx="320" cy="280" r="4" fill="#a855f7" />
              <text x="340" y="285" fill="#aaa" fontSize="10">D13</text>
              
              <circle cx="480" cy="220" r="4" fill="#3b82f6" />
              <text x="450" y="225" fill="#aaa" fontSize="10" textAnchor="end">A4 (SDA)</text>
              
              <circle cx="480" cy="240" r="4" fill="#eab308" />
              <text x="450" y="245" fill="#aaa" fontSize="10" textAnchor="end">A5 (SCL)</text>
              
              <circle cx="480" cy="260" r="4" fill="#f97316" />
              <text x="450" y="265" fill="#aaa" fontSize="10" textAnchor="end">A0</text>

              <rect x="50" y="50" width="120" height="80" fill="none" stroke="#fff" strokeWidth="2" />
              <text x="110" y="40" textAnchor="middle" fill="#0EA5E9" fontSize="12" fontWeight="bold">LCD 16x2</text>
              <circle cx="70" cy="70" r="3" fill="#ef4444" />
              <text x="80" y="73" fill="#aaa" fontSize="8">VCC</text>
              <circle cx="70" cy="85" r="3" fill="#71717a" />
              <text x="80" y="88" fill="#aaa" fontSize="8">GND</text>
              <circle cx="70" cy="100" r="3" fill="#3b82f6" />
              <text x="80" y="103" fill="#aaa" fontSize="8">SDA</text>
              <circle cx="70" cy="115" r="3" fill="#eab308" />
              <text x="80" y="118" fill="#aaa" fontSize="8">SCL</text>

              <rect x="50" y="250" width="100" height="70" fill="none" stroke="#fff" strokeWidth="2" />
              <text x="100" y="240" textAnchor="middle" fill="#0EA5E9" fontSize="12" fontWeight="bold">DHT22</text>
              <circle cx="70" cy="270" r="3" fill="#ef4444" />
              <text x="80" y="273" fill="#aaa" fontSize="8">VCC</text>
              <circle cx="70" cy="285" r="3" fill="#71717a" />
              <text x="80" y="288" fill="#aaa" fontSize="8">GND</text>
              <circle cx="70" cy="300" r="3" fill="#22c55e" />
              <text x="80" y="303" fill="#aaa" fontSize="8">DATA</text>

              <rect x="630" y="180" width="100" height="80" fill="none" stroke="#fff" strokeWidth="2" />
              <text x="680" y="170" textAnchor="middle" fill="#0EA5E9" fontSize="12" fontWeight="bold">Relay</text>
              <circle cx="650" cy="200" r="3" fill="#ef4444" />
              <text x="660" y="203" fill="#aaa" fontSize="8">VCC</text>
              <circle cx="650" cy="220" r="3" fill="#71717a" />
              <text x="660" y="223" fill="#aaa" fontSize="8">GND</text>
              <circle cx="650" cy="240" r="3" fill="#a855f7" />
              <text x="660" y="243" fill="#aaa" fontSize="8">IN</text>

              <rect x="630" y="350" width="100" height="80" fill="none" stroke="#fff" strokeWidth="2" />
              <text x="680" y="340" textAnchor="middle" fill="#0EA5E9" fontSize="12" fontWeight="bold">Potentiometer</text>
              <circle cx="650" cy="370" r="3" fill="#ef4444" />
              <text x="660" y="373" fill="#aaa" fontSize="8">VCC</text>
              <circle cx="650" cy="390" r="3" fill="#71717a" />
              <text x="660" y="393" fill="#aaa" fontSize="8">GND</text>
              <circle cx="650" cy="410" r="3" fill="#f97316" />
              <text x="660" y="413" fill="#aaa" fontSize="8">OUT</text>

              <line x1="170" y1="70" x2="280" y2="70" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="280" y1="70" x2="280" y2="220" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="280" y1="220" x2="320" y2="220" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
              
              <line x1="170" y1="85" x2="250" y2="85" stroke="#71717a" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="250" y1="85" x2="250" y2="240" stroke="#71717a" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="250" y1="240" x2="320" y2="240" stroke="#71717a" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
              
              <line x1="170" y1="100" x2="220" y2="100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="220" y1="100" x2="220" y2="170" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="220" y1="170" x2="550" y2="170" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="550" y1="170" x2="550" y2="220" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="550" y1="220" x2="480" y2="220" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
              
              <line x1="170" y1="115" x2="190" y2="115" stroke="#eab308" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="190" y1="115" x2="190" y2="150" stroke="#eab308" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="190" y1="150" x2="570" y2="150" stroke="#eab308" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="570" y1="150" x2="570" y2="240" stroke="#eab308" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="570" y1="240" x2="480" y2="240" stroke="#eab308" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />

              <line x1="150" y1="270" x2="280" y2="270" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="280" y1="270" x2="280" y2="220" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
              
              <line x1="150" y1="285" x2="250" y2="285" stroke="#71717a" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="250" y1="285" x2="250" y2="240" stroke="#71717a" strokeWidth="2" strokeDasharray="5,5" />
              
              <line x1="150" y1="300" x2="200" y2="300" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="200" y1="300" x2="200" y2="260" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="200" y1="260" x2="320" y2="260" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />

              <line x1="500" y1="280" x2="550" y2="280" stroke="#a855f7" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="550" y1="280" x2="550" y2="240" stroke="#a855f7" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="550" y1="240" x2="650" y2="240" stroke="#a855f7" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
              
              <line x1="500" y1="220" x2="520" y2="220" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="520" y1="220" x2="520" y2="200" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="520" y1="200" x2="650" y2="200" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
              
              <line x1="500" y1="240" x2="540" y2="240" stroke="#71717a" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="540" y1="240" x2="540" y2="220" stroke="#71717a" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="540" y1="220" x2="650" y2="220" stroke="#71717a" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />

              <line x1="500" y1="260" x2="600" y2="260" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="600" y1="260" x2="600" y2="410" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="600" y1="410" x2="650" y2="410" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
              
              <line x1="520" y1="200" x2="520" y2="370" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="520" y1="370" x2="650" y2="370" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
              
              <line x1="540" y1="220" x2="540" y2="390" stroke="#71717a" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="540" y1="390" x2="650" y2="390" stroke="#71717a" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
            </svg>
          </div>
          
          <div className="mt-6 text-xs text-muted-foreground space-y-1">
            <p>Условные обозначения:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span>+5V (VCC)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-zinc-700 rounded"></div>
                <span>GND (земля)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>I2C SDA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                <span>I2C SCL</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Digital Pin</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span>Control Pin</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded"></div>
                <span>Analog Pin</span>
              </div>
            </div>
          </div>
        </Card>

        <footer className="text-center text-xs text-muted-foreground border-t border-border pt-6">
          <p>Схема соответствует ГОСТ 2.701-2008 (ЕСКД). Все значения указаны для температуры +25°C.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;