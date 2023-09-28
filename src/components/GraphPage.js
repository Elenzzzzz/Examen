// pages/GraphPage.js
import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import { Line } from 'react-chartjs-2';

const GraphPage = () => {
  const [expression, setExpression] = useState('');
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    // Evaluar la expresión en el intervalo especificado
    const xValues = [];
    const yValues = [];

    for (let x = start; x <= end; x++) {
      xValues.push(x);
      yValues.push(evaluate(expression, { x }));
    }

    setData({
      labels: xValues,
      datasets: [
        {
          label: 'Resultado',
          data: yValues,
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    });
  };

  return (
    <div>
      <h1>Evaluar Expresión Algebraica</h1>
      <div>
        <label htmlFor="expression">Expresión:</label>
        <input
          type="text"
          id="expression"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="start">Inicio:</label>
        <input
          type="number"
          id="start"
          value={start}
          onChange={(e) => setStart(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="end">Fin:</label>
        <input
          type="number"
          id="end"
          value={end}
          onChange={(e) => setEnd(parseInt(e.target.value))}
        />
      </div>
      <button onClick={handleSubmit}>Evaluar</button>
      <div>
        <Line data={data} />
      </div>
    </div>
  );
};

export default GraphPage;
