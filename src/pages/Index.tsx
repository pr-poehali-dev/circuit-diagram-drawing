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
        <div className="text-center border-b-2 border-foreground pb-6 mb-8">
          <p className="text-xs mb-2">ГОСТ 2.701-2008 (ЕСКД)</p>
          <h1 className="text-2xl font-bold tracking-tight mb-1">ПРИНЦИПИАЛЬНАЯ ЭЛЕКТРИЧЕСКАЯ СХЕМА</h1>
          <p className="text-sm">Система мониторинга Arduino UNO</p>
          <div className="mt-4 text-xs">
            <p>U<sub>пит</sub> = 5В, I<sub>общ</sub> = 143.5 мА</p>
          </div>
        </div>

        <div className="border-2 border-foreground p-8">
          <svg viewBox="0 0 900 650" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 Z" fill="#000" />
              </marker>
            </defs>

            <rect x="350" y="250" width="200" height="150" fill="none" stroke="#000" strokeWidth="2.5" />
            <text x="450" y="235" textAnchor="middle" fill="#000" fontSize="14" fontWeight="bold">DD1</text>
            <text x="450" y="420" textAnchor="middle" fill="#000" fontSize="11">Arduino UNO (ATmega328P)</text>
            
            <circle cx="350" cy="270" r="3" fill="#000" />
            <text x="330" y="275" fill="#000" fontSize="9" textAnchor="end">+5V</text>
            
            <circle cx="350" cy="300" r="3" fill="#000" />
            <text x="330" y="305" fill="#000" fontSize="9" textAnchor="end">GND</text>
            
            <circle cx="350" cy="330" r="3" fill="#000" />
            <text x="330" y="335" fill="#000" fontSize="9" textAnchor="end">D2</text>
            
            <circle cx="350" cy="360" r="3" fill="#000" />
            <text x="330" y="365" fill="#000" fontSize="9" textAnchor="end">D13</text>
            
            <circle cx="550" cy="270" r="3" fill="#000" />
            <text x="570" y="275" fill="#000" fontSize="9">A4</text>
            
            <circle cx="550" cy="300" r="3" fill="#000" />
            <text x="570" y="305" fill="#000" fontSize="9">A5</text>
            
            <circle cx="550" cy="330" r="3" fill="#000" />
            <text x="570" y="335" fill="#000" fontSize="9">A0</text>

            <rect x="80" y="80" width="140" height="100" fill="none" stroke="#000" strokeWidth="2.5" />
            <text x="150" y="65" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">HG1</text>
            <text x="150" y="195" textAnchor="middle" fill="#000" fontSize="10">LCD 16×2 (I²C)</text>
            <circle cx="90" cy="95" r="2.5" fill="#000" />
            <text x="100" y="98" fill="#000" fontSize="8">1 VCC</text>
            <circle cx="90" cy="115" r="2.5" fill="#000" />
            <text x="100" y="118" fill="#000" fontSize="8">2 GND</text>
            <circle cx="90" cy="135" r="2.5" fill="#000" />
            <text x="100" y="138" fill="#000" fontSize="8">3 SDA</text>
            <circle cx="90" cy="155" r="2.5" fill="#000" />
            <text x="100" y="158" fill="#000" fontSize="8">4 SCL</text>

            <rect x="80" y="300" width="120" height="90" fill="none" stroke="#000" strokeWidth="2.5" />
            <text x="140" y="285" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">U1</text>
            <text x="140" y="405" textAnchor="middle" fill="#000" fontSize="10">DHT22</text>
            <circle cx="90" cy="320" r="2.5" fill="#000" />
            <text x="100" y="323" fill="#000" fontSize="8">1 VCC</text>
            <circle cx="90" cy="345" r="2.5" fill="#000" />
            <text x="100" y="348" fill="#000" fontSize="8">2 DATA</text>
            <circle cx="90" cy="370" r="2.5" fill="#000" />
            <text x="100" y="373" fill="#000" fontSize="8">4 GND</text>

            <rect x="680" y="230" width="120" height="100" fill="none" stroke="#000" strokeWidth="2.5" />
            <text x="740" y="215" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">K1</text>
            <text x="740" y="345" textAnchor="middle" fill="#000" fontSize="10">Реле 5В</text>
            <circle cx="690" cy="250" r="2.5" fill="#000" />
            <text x="700" y="253" fill="#000" fontSize="8">VCC</text>
            <circle cx="690" cy="280" r="2.5" fill="#000" />
            <text x="700" y="283" fill="#000" fontSize="8">GND</text>
            <circle cx="690" cy="310" r="2.5" fill="#000" />
            <text x="700" y="313" fill="#000" fontSize="8">IN</text>

            <rect x="680" y="430" width="120" height="100" fill="none" stroke="#000" strokeWidth="2.5" />
            <text x="740" y="415" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">R1</text>
            <text x="740" y="545" textAnchor="middle" fill="#000" fontSize="10">10кΩ</text>
            <circle cx="690" cy="450" r="2.5" fill="#000" />
            <text x="700" y="453" fill="#000" fontSize="8">1</text>
            <circle cx="690" cy="490" r="2.5" fill="#000" />
            <text x="700" y="493" fill="#000" fontSize="8">2 OUT</text>
            <circle cx="690" cy="510" r="2.5" fill="#000" />
            <text x="700" y="513" fill="#000" fontSize="8">3</text>

            <line x1="220" y1="95" x2="280" y2="95" stroke="#000" strokeWidth="1.5" />
            <line x1="280" y1="95" x2="280" y2="270" stroke="#000" strokeWidth="1.5" />
            <line x1="280" y1="270" x2="350" y2="270" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="240" y="90" fill="#000" fontSize="8">+5V</text>
            
            <line x1="220" y1="115" x2="260" y2="115" stroke="#000" strokeWidth="1.5" />
            <line x1="260" y1="115" x2="260" y2="300" stroke="#000" strokeWidth="1.5" />
            <line x1="260" y1="300" x2="350" y2="300" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="230" y="110" fill="#000" fontSize="8">GND</text>
            
            <line x1="220" y1="135" x2="240" y2="135" stroke="#000" strokeWidth="1.5" />
            <line x1="240" y1="135" x2="240" y2="210" stroke="#000" strokeWidth="1.5" />
            <line x1="240" y1="210" x2="620" y2="210" stroke="#000" strokeWidth="1.5" />
            <line x1="620" y1="210" x2="620" y2="270" stroke="#000" strokeWidth="1.5" />
            <line x1="620" y1="270" x2="550" y2="270" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="245" y="130" fill="#000" fontSize="8">SDA</text>
            
            <line x1="220" y1="155" x2="230" y2="155" stroke="#000" strokeWidth="1.5" />
            <line x1="230" y1="155" x2="230" y2="190" stroke="#000" strokeWidth="1.5" />
            <line x1="230" y1="190" x2="640" y2="190" stroke="#000" strokeWidth="1.5" />
            <line x1="640" y1="190" x2="640" y2="300" stroke="#000" strokeWidth="1.5" />
            <line x1="640" y1="300" x2="550" y2="300" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="235" y="150" fill="#000" fontSize="8">SCL</text>

            <line x1="200" y1="320" x2="280" y2="320" stroke="#000" strokeWidth="1.5" />
            <line x1="280" y1="320" x2="280" y2="270" stroke="#000" strokeWidth="1.5" />
            <text x="230" y="315" fill="#000" fontSize="8">+5V</text>
            
            <line x1="200" y1="370" x2="260" y2="370" stroke="#000" strokeWidth="1.5" />
            <line x1="260" y1="370" x2="260" y2="300" stroke="#000" strokeWidth="1.5" />
            <text x="220" y="365" fill="#000" fontSize="8">GND</text>
            
            <line x1="200" y1="345" x2="250" y2="345" stroke="#000" strokeWidth="1.5" />
            <line x1="250" y1="345" x2="250" y2="330" stroke="#000" strokeWidth="1.5" />
            <line x1="250" y1="330" x2="350" y2="330" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="210" y="340" fill="#000" fontSize="8">DATA</text>

            <line x1="550" y1="360" x2="600" y2="360" stroke="#000" strokeWidth="1.5" />
            <line x1="600" y1="360" x2="600" y2="310" stroke="#000" strokeWidth="1.5" />
            <line x1="600" y1="310" x2="690" y2="310" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="610" y="335" fill="#000" fontSize="8">D13</text>
            
            <line x1="550" y1="270" x2="610" y2="270" stroke="#000" strokeWidth="1.5" />
            <line x1="610" y1="270" x2="610" y2="250" stroke="#000" strokeWidth="1.5" />
            <line x1="610" y1="250" x2="690" y2="250" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="570" y="245" fill="#000" fontSize="8">+5V</text>
            
            <line x1="550" y1="300" x2="590" y2="300" stroke="#000" strokeWidth="1.5" />
            <line x1="590" y1="300" x2="590" y2="280" stroke="#000" strokeWidth="1.5" />
            <line x1="590" y1="280" x2="690" y2="280" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="570" y="275" fill="#000" fontSize="8">GND</text>

            <line x1="550" y1="330" x2="660" y2="330" stroke="#000" strokeWidth="1.5" />
            <line x1="660" y1="330" x2="660" y2="490" stroke="#000" strokeWidth="1.5" />
            <line x1="660" y1="490" x2="690" y2="490" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="570" y="325" fill="#000" fontSize="8">A0</text>
            
            <line x1="610" y1="250" x2="610" y2="450" stroke="#000" strokeWidth="1.5" />
            <line x1="610" y1="450" x2="690" y2="450" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrow)" />
            
            <line x1="590" y1="280" x2="590" y2="510" stroke="#000" strokeWidth="1.5" />
            <line x1="590" y1="510" x2="690" y2="510" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrow)" />
          </svg>
        </div>

        <div className="mt-8 border-t-2 border-foreground pt-4">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-foreground">
                <th className="text-left py-2 border-r border-foreground px-2">Поз. обозн.</th>
                <th className="text-left py-2 border-r border-foreground px-2">Наименование</th>
                <th className="text-left py-2 border-r border-foreground px-2">U, В</th>
                <th className="text-left py-2 px-2">I, мА</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-foreground">
                <td className="py-1 border-r border-foreground px-2 font-mono">DD1</td>
                <td className="py-1 border-r border-foreground px-2">Микроконтроллер Arduino UNO (ATmega328P)</td>
                <td className="py-1 border-r border-foreground px-2 font-mono">5</td>
                <td className="py-1 px-2 font-mono">50</td>
              </tr>
              <tr className="border-b border-foreground">
                <td className="py-1 border-r border-foreground px-2 font-mono">U1</td>
                <td className="py-1 border-r border-foreground px-2">Датчик температуры и влажности DHT22</td>
                <td className="py-1 border-r border-foreground px-2 font-mono">3.3-5</td>
                <td className="py-1 px-2 font-mono">2.5</td>
              </tr>
              <tr className="border-b border-foreground">
                <td className="py-1 border-r border-foreground px-2 font-mono">HG1</td>
                <td className="py-1 border-r border-foreground px-2">Дисплей жидкокристаллический LCD 16×2 с интерфейсом I²C</td>
                <td className="py-1 border-r border-foreground px-2 font-mono">5</td>
                <td className="py-1 px-2 font-mono">20</td>
              </tr>
              <tr className="border-b border-foreground">
                <td className="py-1 border-r border-foreground px-2 font-mono">K1</td>
                <td className="py-1 border-r border-foreground px-2">Реле электромагнитное 5В, 1 канал</td>
                <td className="py-1 border-r border-foreground px-2 font-mono">5</td>
                <td className="py-1 px-2 font-mono">70</td>
              </tr>
              <tr className="border-b border-foreground">
                <td className="py-1 border-r border-foreground px-2 font-mono">R1</td>
                <td className="py-1 border-r border-foreground px-2">Резистор переменный (потенциометр) 10кΩ</td>
                <td className="py-1 border-r border-foreground px-2 font-mono">5</td>
                <td className="py-1 px-2 font-mono">&lt;1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-xs text-center border-t-2 border-foreground pt-4">
          <p>Примечания: 1. Все значения указаны при T=+25°C. 2. Питание от USB или внешнего источника 7-12В.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;