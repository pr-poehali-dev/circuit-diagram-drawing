const Index = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <div className="max-w-[297mm] mx-auto bg-white shadow-lg" style={{ minHeight: '210mm' }}>
        <div className="relative w-full border-[3px] border-black" style={{ minHeight: '297mm' }}>
          
          <div className="absolute top-0 left-0 w-5 h-full border-r border-black"></div>
          
          <div className="absolute top-[20mm] left-[25mm] right-[5mm] bottom-[60mm]">
            <div className="text-center mb-6">
              <p className="text-[9pt] mb-1">ПРИНЦИПИАЛЬНАЯ ЭЛЕКТРИЧЕСКАЯ СХЕМА</p>
            </div>

            <svg viewBox="0 0 1000 600" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 Z" fill="#000" />
                </marker>
              </defs>

              <rect x="400" y="200" width="200" height="200" fill="none" stroke="#000" strokeWidth="2" />
              <text x="500" y="185" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">DD1</text>
              
              <circle cx="400" cy="230" r="2" fill="#000" />
              <text x="380" y="233" fill="#000" fontSize="9" textAnchor="end">1</text>
              <line x1="360" y1="230" x2="398" y2="230" stroke="#000" strokeWidth="1" />
              <text x="370" y="225" fill="#000" fontSize="8">+5V</text>
              
              <circle cx="400" cy="270" r="2" fill="#000" />
              <text x="380" y="273" fill="#000" fontSize="9" textAnchor="end">8</text>
              <line x1="340" y1="270" x2="398" y2="270" stroke="#000" strokeWidth="1" />
              <text x="350" y="265" fill="#000" fontSize="8">GND</text>
              
              <circle cx="400" cy="310" r="2" fill="#000" />
              <text x="380" y="313" fill="#000" fontSize="9" textAnchor="end">2</text>
              <line x1="320" y1="310" x2="398" y2="310" stroke="#000" strokeWidth="1" />
              
              <circle cx="400" cy="350" r="2" fill="#000" />
              <text x="380" y="353" fill="#000" fontSize="9" textAnchor="end">13</text>
              <line x1="300" y1="350" x2="398" y2="350" stroke="#000" strokeWidth="1" />
              
              <circle cx="600" cy="230" r="2" fill="#000" />
              <text x="620" y="233" fill="#000" fontSize="9">A4</text>
              <line x1="602" y1="230" x2="700" y2="230" stroke="#000" strokeWidth="1" />
              
              <circle cx="600" cy="270" r="2" fill="#000" />
              <text x="620" y="273" fill="#000" fontSize="9">A5</text>
              <line x1="602" y1="270" x2="720" y2="270" stroke="#000" strokeWidth="1" />
              
              <circle cx="600" cy="310" r="2" fill="#000" />
              <text x="620" y="313" fill="#000" fontSize="9">A0</text>
              <line x1="602" y1="310" x2="680" y2="310" stroke="#000" strokeWidth="1" />

              <rect x="50" y="50" width="100" height="140" fill="none" stroke="#000" strokeWidth="2" />
              <text x="100" y="40" textAnchor="middle" fill="#000" fontSize="11" fontWeight="bold">HG1</text>
              
              <circle cx="150" cy="70" r="2" fill="#000" />
              <text x="170" y="73" fill="#000" fontSize="9">1</text>
              <line x1="152" y1="70" x2="280" y2="70" stroke="#000" strokeWidth="1" />
              <line x1="280" y1="70" x2="280" y2="230" stroke="#000" strokeWidth="1" />
              <line x1="280" y1="230" x2="398" y2="230" stroke="#000" strokeWidth="1" />
              
              <circle cx="150" cy="100" r="2" fill="#000" />
              <text x="170" y="103" fill="#000" fontSize="9">2</text>
              <line x1="152" y1="100" x2="260" y2="100" stroke="#000" strokeWidth="1" />
              <line x1="260" y1="100" x2="260" y2="270" stroke="#000" strokeWidth="1" />
              <line x1="260" y1="270" x2="338" y2="270" stroke="#000" strokeWidth="1" />
              
              <circle cx="150" cy="130" r="2" fill="#000" />
              <text x="170" y="133" fill="#000" fontSize="9">3</text>
              <line x1="152" y1="130" x2="240" y2="130" stroke="#000" strokeWidth="1" />
              <line x1="240" y1="130" x2="240" y2="150" stroke="#000" strokeWidth="1" />
              <line x1="240" y1="150" x2="700" y2="150" stroke="#000" strokeWidth="1" />
              <line x1="700" y1="150" x2="700" y2="230" stroke="#000" strokeWidth="1" />
              
              <circle cx="150" cy="160" r="2" fill="#000" />
              <text x="170" y="163" fill="#000" fontSize="9">4</text>
              <line x1="152" y1="160" x2="220" y2="160" stroke="#000" strokeWidth="1" />
              <line x1="220" y1="160" x2="220" y2="170" stroke="#000" strokeWidth="1" />
              <line x1="220" y1="170" x2="720" y2="170" stroke="#000" strokeWidth="1" />
              <line x1="720" y1="170" x2="720" y2="270" stroke="#000" strokeWidth="1" />

              <rect x="50" y="280" width="100" height="120" fill="none" stroke="#000" strokeWidth="2" />
              <text x="100" y="270" textAnchor="middle" fill="#000" fontSize="11" fontWeight="bold">U1</text>
              
              <circle cx="150" cy="300" r="2" fill="#000" />
              <text x="170" y="303" fill="#000" fontSize="9">1</text>
              <line x1="152" y1="300" x2="280" y2="300" stroke="#000" strokeWidth="1" />
              <line x1="280" y1="300" x2="280" y2="230" stroke="#000" strokeWidth="1" />
              
              <circle cx="150" cy="340" r="2" fill="#000" />
              <text x="170" y="343" fill="#000" fontSize="9">2</text>
              <line x1="152" y1="340" x2="200" y2="340" stroke="#000" strokeWidth="1" />
              <line x1="200" y1="340" x2="200" y2="310" stroke="#000" strokeWidth="1" />
              <line x1="200" y1="310" x2="398" y2="310" stroke="#000" strokeWidth="1" />
              
              <circle cx="150" cy="370" r="2" fill="#000" />
              <text x="170" y="373" fill="#000" fontSize="9">4</text>
              <line x1="152" y1="370" x2="260" y2="370" stroke="#000" strokeWidth="1" />
              <line x1="260" y1="370" x2="260" y2="270" stroke="#000" strokeWidth="1" />

              <rect x="800" y="200" width="100" height="120" fill="none" stroke="#000" strokeWidth="2" />
              <text x="850" y="190" textAnchor="middle" fill="#000" fontSize="11" fontWeight="bold">K1</text>
              
              <circle cx="800" cy="220" r="2" fill="#000" />
              <text x="780" y="223" fill="#000" fontSize="9" textAnchor="end">+</text>
              <line x1="700" y1="220" x2="798" y2="220" stroke="#000" strokeWidth="1" />
              <line x1="700" y1="220" x2="700" y2="230" stroke="#000" strokeWidth="1" />
              
              <circle cx="800" cy="260" r="2" fill="#000" />
              <text x="780" y="263" fill="#000" fontSize="9" textAnchor="end">-</text>
              <line x1="720" y1="260" x2="798" y2="260" stroke="#000" strokeWidth="1" />
              <line x1="720" y1="260" x2="720" y2="270" stroke="#000" strokeWidth="1" />
              
              <circle cx="800" cy="300" r="2" fill="#000" />
              <text x="780" y="303" fill="#000" fontSize="9" textAnchor="end">S</text>
              <line x1="300" y1="350" x2="300" y2="450" stroke="#000" strokeWidth="1" />
              <line x1="300" y1="450" x2="740" y2="450" stroke="#000" strokeWidth="1" />
              <line x1="740" y1="450" x2="740" y2="300" stroke="#000" strokeWidth="1" />
              <line x1="740" y1="300" x2="798" y2="300" stroke="#000" strokeWidth="1" />

              <rect x="800" y="380" width="80" height="100" fill="none" stroke="#000" strokeWidth="2" />
              <text x="840" y="370" textAnchor="middle" fill="#000" fontSize="11" fontWeight="bold">R1</text>
              <line x1="820" y1="380" x2="860" y2="380" stroke="#000" strokeWidth="2" />
              <line x1="825" y1="385" x2="855" y2="395" stroke="#000" strokeWidth="2" />
              <line x1="830" y1="390" x2="850" y2="400" stroke="#000" strokeWidth="2" />
              <line x1="835" y1="395" x2="845" y2="405" stroke="#000" strokeWidth="2" />
              <line x1="820" y1="480" x2="860" y2="480" stroke="#000" strokeWidth="2" />
              
              <circle cx="800" cy="400" r="2" fill="#000" />
              <text x="780" y="403" fill="#000" fontSize="9" textAnchor="end">1</text>
              <line x1="700" y1="400" x2="798" y2="400" stroke="#000" strokeWidth="1" />
              <line x1="700" y1="400" x2="700" y2="230" stroke="#000" strokeWidth="1" />
              
              <circle cx="800" cy="440" r="2" fill="#000" />
              <text x="780" y="443" fill="#000" fontSize="9" textAnchor="end">2</text>
              <line x1="680" y1="440" x2="798" y2="440" stroke="#000" strokeWidth="1" />
              <line x1="680" y1="440" x2="680" y2="310" stroke="#000" strokeWidth="1" />
              <line x1="680" y1="310" x2="598" y2="310" stroke="#000" strokeWidth="1" />
              
              <circle cx="800" cy="460" r="2" fill="#000" />
              <text x="780" y="463" fill="#000" fontSize="9" textAnchor="end">3</text>
              <line x1="720" y1="460" x2="798" y2="460" stroke="#000" strokeWidth="1" />
              <line x1="720" y1="460" x2="720" y2="270" stroke="#000" strokeWidth="1" />
            </svg>
          </div>

          <div className="absolute bottom-0 right-0 border-2 border-black">
            <table className="border-collapse text-[8pt]">
              <tbody>
                <tr>
                  <td rowSpan={7} className="border border-black px-2 py-1 w-[40mm] align-top">
                    <div className="text-[7pt] leading-tight">Перв. примен.</div>
                  </td>
                  <td className="border border-black px-2 py-1 text-center w-[17mm]">Справ. №</td>
                  <td className="border border-black px-2 py-1 text-center w-[7mm]"></td>
                  <td className="border border-black px-2 py-1 text-center w-[23mm]">Перв. примен.</td>
                </tr>
                <tr>
                  <td className="border border-black px-2 py-1 text-center">Подп. и дата</td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                </tr>
                <tr>
                  <td className="border border-black px-2 py-1 text-center">Инв. № дубл.</td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td rowSpan={5} className="border border-black px-2 py-1 text-center align-middle font-bold">Э3</td>
                </tr>
                <tr>
                  <td className="border border-black px-2 py-1 text-center">Подп. и дата</td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                </tr>
                <tr>
                  <td className="border border-black px-2 py-1 text-center">Взам. инв. №</td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                </tr>
                <tr>
                  <td className="border border-black px-2 py-1 text-center">Инв. № подл.</td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                </tr>
                <tr>
                  <td className="border border-black px-2 py-1 text-center">Подп. и дата</td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                </tr>
                
                <tr>
                  <td rowSpan={3} className="border border-black px-2 py-1 align-middle text-center font-bold text-[11pt]">
                    Система мониторинга<br/>Arduino UNO
                  </td>
                  <td className="border border-black px-1 text-[7pt]">Разраб.</td>
                  <td className="border border-black px-2 py-1"></td>
                  <td className="border border-black px-2 py-1"></td>
                  <td rowSpan={3} className="border border-black px-2 py-1 align-middle text-center font-bold text-[10pt]">
                    Схема<br/>электрическая<br/>принципиальная
                  </td>
                  <td className="border border-black px-2 py-1 text-center w-[15mm]">Лит.</td>
                  <td className="border border-black px-2 py-1 text-center w-[12mm]">Лист</td>
                  <td className="border border-black px-2 py-1 text-center w-[15mm]">Листов</td>
                </tr>
                <tr>
                  <td className="border border-black px-1 text-[7pt]">Пров.</td>
                  <td className="border border-black px-2 py-1"></td>
                  <td className="border border-black px-2 py-1"></td>
                  <td rowSpan={2} className="border border-black px-2 py-1 text-center align-middle"></td>
                  <td rowSpan={2} className="border border-black px-2 py-1 text-center align-middle font-bold">1</td>
                  <td rowSpan={2} className="border border-black px-2 py-1 text-center align-middle font-bold">1</td>
                </tr>
                <tr>
                  <td className="border border-black px-1 text-[7pt]">Н. контр.</td>
                  <td className="border border-black px-2 py-1"></td>
                  <td className="border border-black px-2 py-1"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="absolute left-[25mm] right-[5mm]" style={{ top: 'calc(297mm - 55mm)' }}>
            <table className="w-full border-2 border-black border-collapse text-[8pt]">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="border-r border-black px-2 py-1 text-left w-[30mm]">Поз. обозн.</th>
                  <th className="border-r border-black px-2 py-1 text-left">Наименование</th>
                  <th className="border-r border-black px-2 py-1 text-center w-[15mm]">Кол.</th>
                  <th className="px-2 py-1 text-left w-[30mm]">Примечание</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black">
                  <td className="border-r border-black px-2 py-1 font-mono">DD1</td>
                  <td className="border-r border-black px-2 py-1">Контроллер Arduino UNO R3 (ATmega328P)</td>
                  <td className="border-r border-black px-2 py-1 text-center">1</td>
                  <td className="px-2 py-1">5В, 50мА</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black px-2 py-1 font-mono">U1</td>
                  <td className="border-r border-black px-2 py-1">Датчик температуры и влажности DHT22</td>
                  <td className="border-r border-black px-2 py-1 text-center">1</td>
                  <td className="px-2 py-1">3.3-5В, 2.5мА</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black px-2 py-1 font-mono">HG1</td>
                  <td className="border-r border-black px-2 py-1">Индикатор жидкокристаллический 16×2, I²C</td>
                  <td className="border-r border-black px-2 py-1 text-center">1</td>
                  <td className="px-2 py-1">5В, 20мА</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black px-2 py-1 font-mono">K1</td>
                  <td className="border-r border-black px-2 py-1">Реле электромагнитное, 5В, 1 канал</td>
                  <td className="border-r border-black px-2 py-1 text-center">1</td>
                  <td className="px-2 py-1">70мА</td>
                </tr>
                <tr>
                  <td className="border-r border-black px-2 py-1 font-mono">R1</td>
                  <td className="border-r border-black px-2 py-1">Резистор переменный 10кОм</td>
                  <td className="border-r border-black px-2 py-1 text-center">1</td>
                  <td className="px-2 py-1">&lt;1мА</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
