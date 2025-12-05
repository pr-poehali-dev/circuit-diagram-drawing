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
      pins: "Pin 7",
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

        <div className="border-2 border-foreground p-4">
          <svg viewBox="0 0 1000 700" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="#000" />
              </marker>
            </defs>

            <rect x="400" y="280" width="220" height="200" fill="none" stroke="#000" strokeWidth="3" />
            <text x="510" y="260" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold">DD1</text>
            <text x="510" y="500" textAnchor="middle" fill="#000" fontSize="13">Arduino UNO</text>
            <text x="510" y="518" textAnchor="middle" fill="#000" fontSize="11">(ATmega328P)</text>
            
            <circle cx="400" cy="310" r="4" fill="#000" />
            <text x="370" y="315" fill="#000" fontSize="11" textAnchor="end" fontWeight="bold">+5V</text>
            
            <circle cx="400" cy="350" r="4" fill="#000" />
            <text x="370" y="355" fill="#000" fontSize="11" textAnchor="end" fontWeight="bold">GND</text>
            
            <circle cx="400" cy="390" r="4" fill="#000" />
            <text x="370" y="395" fill="#000" fontSize="11" textAnchor="end" fontWeight="bold">D2</text>
            
            <circle cx="400" cy="430" r="4" fill="#000" />
            <text x="370" y="435" fill="#000" fontSize="11" textAnchor="end" fontWeight="bold">D7</text>
            
            <circle cx="620" cy="310" r="4" fill="#000" />
            <text x="650" y="315" fill="#000" fontSize="11" fontWeight="bold">A4 (SDA)</text>
            
            <circle cx="620" cy="350" r="4" fill="#000" />
            <text x="650" y="355" fill="#000" fontSize="11" fontWeight="bold">A5 (SCL)</text>
            
            <circle cx="620" cy="390" r="4" fill="#000" />
            <text x="650" y="395" fill="#000" fontSize="11" fontWeight="bold">A0</text>

            <rect x="60" y="80" width="160" height="130" fill="none" stroke="#000" strokeWidth="3" />
            <text x="140" y="60" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold">HG1</text>
            <text x="140" y="230" textAnchor="middle" fill="#000" fontSize="12">LCD 16×2 (I²C)</text>
            
            <circle cx="75" cy="105" r="3" fill="#000" />
            <text x="90" y="109" fill="#000" fontSize="10" fontWeight="bold">VCC</text>
            
            <circle cx="75" cy="135" r="3" fill="#000" />
            <text x="90" y="139" fill="#000" fontSize="10" fontWeight="bold">GND</text>
            
            <circle cx="75" cy="165" r="3" fill="#000" />
            <text x="90" y="169" fill="#000" fontSize="10" fontWeight="bold">SDA</text>
            
            <circle cx="75" cy="195" r="3" fill="#000" />
            <text x="90" y="199" fill="#000" fontSize="10" fontWeight="bold">SCL</text>

            <rect x="60" y="340" width="140" height="110" fill="none" stroke="#000" strokeWidth="3" />
            <text x="130" y="320" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold">U1</text>
            <text x="130" y="470" textAnchor="middle" fill="#000" fontSize="12">DHT22</text>
            
            <circle cx="75" cy="365" r="3" fill="#000" />
            <text x="90" y="369" fill="#000" fontSize="10" fontWeight="bold">VCC</text>
            
            <circle cx="75" cy="395" r="3" fill="#000" />
            <text x="90" y="399" fill="#000" fontSize="10" fontWeight="bold">DATA</text>
            
            <circle cx="75" cy="425" r="3" fill="#000" />
            <text x="90" y="429" fill="#000" fontSize="10" fontWeight="bold">GND</text>

            <rect x="760" y="250" width="150" height="120" fill="none" stroke="#000" strokeWidth="3" />
            <text x="835" y="230" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold">K1</text>
            <text x="835" y="390" textAnchor="middle" fill="#000" fontSize="12">Реле 5В</text>
            
            <circle cx="775" cy="280" r="3" fill="#000" />
            <text x="790" y="284" fill="#000" fontSize="10" fontWeight="bold">VCC</text>
            
            <circle cx="775" cy="315" r="3" fill="#000" />
            <text x="790" y="319" fill="#000" fontSize="10" fontWeight="bold">GND</text>
            
            <circle cx="775" cy="350" r="3" fill="#000" />
            <text x="790" y="354" fill="#000" fontSize="10" fontWeight="bold">IN</text>

            <rect x="760" y="470" width="150" height="130" fill="none" stroke="#000" strokeWidth="3" />
            <text x="835" y="450" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold">R1</text>
            <text x="835" y="620" textAnchor="middle" fill="#000" fontSize="12">Потенциометр 10кΩ</text>
            
            <circle cx="775" cy="500" r="3" fill="#000" />
            <text x="790" y="504" fill="#000" fontSize="10" fontWeight="bold">1 (+5V)</text>
            
            <circle cx="775" cy="540" r="3" fill="#000" />
            <text x="790" y="544" fill="#000" fontSize="10" fontWeight="bold">2 (OUT)</text>
            
            <circle cx="775" cy="580" r="3" fill="#000" />
            <text x="790" y="584" fill="#000" fontSize="10" fontWeight="bold">3 (GND)</text>

            <line x1="220" y1="105" x2="300" y2="105" stroke="#000" strokeWidth="2" />
            <line x1="300" y1="105" x2="300" y2="310" stroke="#000" strokeWidth="2" />
            <line x1="300" y1="310" x2="400" y2="310" stroke="#000" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="310" y="200" fill="#000" fontSize="10" fontWeight="bold">+5V</text>
            
            <line x1="220" y1="135" x2="270" y2="135" stroke="#000" strokeWidth="2" />
            <line x1="270" y1="135" x2="270" y2="350" stroke="#000" strokeWidth="2" />
            <line x1="270" y1="350" x2="400" y2="350" stroke="#000" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="280" y="240" fill="#000" fontSize="10" fontWeight="bold">GND</text>
            
            <line x1="220" y1="165" x2="250" y2="165" stroke="#000" strokeWidth="2" />
            <line x1="250" y1="165" x2="250" y2="250" stroke="#000" strokeWidth="2" />
            <line x1="250" y1="250" x2="680" y2="250" stroke="#000" strokeWidth="2" />
            <line x1="680" y1="250" x2="680" y2="310" stroke="#000" strokeWidth="2" />
            <line x1="680" y1="310" x2="620" y2="310" stroke="#000" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="440" y="245" fill="#000" fontSize="10" fontWeight="bold">SDA (I²C)</text>
            
            <line x1="220" y1="195" x2="240" y2="195" stroke="#000" strokeWidth="2" />
            <line x1="240" y1="195" x2="240" y2="230" stroke="#000" strokeWidth="2" />
            <line x1="240" y1="230" x2="700" y2="230" stroke="#000" strokeWidth="2" />
            <line x1="700" y1="230" x2="700" y2="350" stroke="#000" strokeWidth="2" />
            <line x1="700" y1="350" x2="620" y2="350" stroke="#000" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="440" y="225" fill="#000" fontSize="10" fontWeight="bold">SCL (I²C)</text>

            <line x1="200" y1="365" x2="300" y2="365" stroke="#000" strokeWidth="2" />
            <line x1="300" y1="365" x2="300" y2="310" stroke="#000" strokeWidth="2" />
            <text x="240" y="360" fill="#000" fontSize="10" fontWeight="bold">+5V</text>
            
            <line x1="200" y1="425" x2="270" y2="425" stroke="#000" strokeWidth="2" />
            <line x1="270" y1="425" x2="270" y2="350" stroke="#000" strokeWidth="2" />
            <text x="230" y="420" fill="#000" fontSize="10" fontWeight="bold">GND</text>
            
            <line x1="200" y1="395" x2="260" y2="395" stroke="#000" strokeWidth="2" />
            <line x1="260" y1="395" x2="260" y2="390" stroke="#000" strokeWidth="2" />
            <line x1="260" y1="390" x2="400" y2="390" stroke="#000" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="290" y="385" fill="#000" fontSize="10" fontWeight="bold">DATA</text>

            <line x1="400" y1="430" x2="360" y2="430" stroke="#000" strokeWidth="2" />
            <line x1="360" y1="430" x2="360" y2="530" stroke="#000" strokeWidth="2" />
            <line x1="360" y1="530" x2="720" y2="530" stroke="#000" strokeWidth="2" />
            <line x1="720" y1="530" x2="720" y2="350" stroke="#000" strokeWidth="2" />
            <line x1="720" y1="350" x2="775" y2="350" stroke="#000" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="520" y="525" fill="#000" fontSize="10" fontWeight="bold">D7</text>
            
            <line x1="620" y1="310" x2="730" y2="310" stroke="#000" strokeWidth="2" />
            <line x1="730" y1="310" x2="730" y2="280" stroke="#000" strokeWidth="2" />
            <line x1="730" y1="280" x2="775" y2="280" stroke="#000" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="660" y="305" fill="#000" fontSize="10" fontWeight="bold">+5V</text>
            
            <line x1="620" y1="350" x2="710" y2="350" stroke="#000" strokeWidth="2" />
            <line x1="710" y1="350" x2="710" y2="315" stroke="#000" strokeWidth="2" />
            <line x1="710" y1="315" x2="775" y2="315" stroke="#000" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="660" y="345" fill="#000" fontSize="10" fontWeight="bold">GND</text>

            <line x1="620" y1="390" x2="740" y2="390" stroke="#000" strokeWidth="2" />
            <line x1="740" y1="390" x2="740" y2="540" stroke="#000" strokeWidth="2" />
            <line x1="740" y1="540" x2="775" y2="540" stroke="#000" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="660" y="385" fill="#000" fontSize="10" fontWeight="bold">A0</text>
            
            <line x1="730" y1="280" x2="730" y2="500" stroke="#000" strokeWidth="2" />
            <line x1="730" y1="500" x2="775" y2="500" stroke="#000" strokeWidth="2" markerEnd="url(#arrow)" />
            
            <line x1="710" y1="315" x2="710" y2="580" stroke="#000" strokeWidth="2" />
            <line x1="710" y1="580" x2="775" y2="580" stroke="#000" strokeWidth="2" markerEnd="url(#arrow)" />
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