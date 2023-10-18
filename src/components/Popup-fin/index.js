import React, { useState } from 'react';
import excelJS from 'exceljs';

import { Popup } from './styled';
import axios from '../../services/axios';

export default function Popup_fin() {
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');

  const handleDownload = async () => {
    try {
      const response = await axios.post('/planilha', {
        mes, ano,
      });

      downloadPlanilha(response.data);
    } catch {
      return console.log('deu erro');
    }
  };

  const downloadPlanilha = (dados) => {
    const workbook = new excelJS.Workbook();

    const sheet = workbook.addWorksheet('Extrato');
    sheet.columns = [
      { header: 'Aluno', key: 'aluno', width: 30 },
      { header: 'Valor Matricula', key: 'valor_matricula', width: 30 },
      { header: 'Desconto', key: 'desconto', width: 15 },
      { header: 'Valor recebido', key: 'valor_recebido', width: 15 },
      { header: 'Data do pagamento', key: 'data_pagamento', width: 25 },
      { header: 'Data de lançamento', key: 'data_lancamento', width: 25 },
      { header: 'Mês referente', key: 'mes_referente', width: 15 },
      { header: 'Método', key: 'metodo', width: 15 },
    ];

    dados.map((value) => sheet.addRow({
      aluno: value.aluno,
      valor_matricula: value.valor_matricula,
      desconto: value.desconto,
      valor_recebido: value.valor_recebido,
      data_pagamento: value.data_pagamento,
      data_lancamento: value.data_lancamento,
      mes_referente: value.mes_referente,
      metodo: value.metodo,
    }));

    // #region alinhamento
    sheet.getColumnKey('aluno').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getColumnKey('valor_matricula').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getColumnKey('desconto').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getColumnKey('valor_recebido').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getColumnKey('data_pagamento').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getColumnKey('data_lancamento').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getColumnKey('mes_referente').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getColumnKey('metodo').alignment = { vertical: 'middle', horizontal: 'center' };
    // #endregion alinhamento

    // #region formato moeda
    sheet.getColumnKey('valor_matricula').numFmt = 'R$#,##0.00;[Red]-R$#,##0.00';
    sheet.getColumnKey('valor_recebido').numFmt = 'R$#,##0.00;[Red]-R$#,##0.00';
    // #endregion formato moeda

    // porcentagem
    sheet.getColumnKey('desconto').numFmt = '#"%"';

    // quebra de texto
    // sheet.getColumnKey('aluno').alignment = { wrapText: true };

    // negrito
    sheet.getRow(1).font = {
      bold: true,
      name: 'Arial Black',
      family: 2,
    };

    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheet.sheet',
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'Extrato SETEC.xlsx';
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <Popup>
      <div className="sup">Por favor, escolha o mês e o ano da planilha</div>

      <div className="mid">

        <label htmlFor="mes">
          Mês
          <input
            list="meses"
            type="search"
            id="mes"
            value={mes}
            onChange={(e) => setMes(e.target.value)}
            onBlur={(e) => setMes(e.target.value)}
          />
        </label>

        <datalist id="meses">
          <option value="Janeiro">Janeiro</option>
          <option value="Fevereiro">Fevereiro</option>
          <option value="Março">Março</option>
          <option value="Abril">Abril</option>
          <option value="Maio">Maio</option>
          <option value="Junho">Junho</option>
          <option value="Julho">Julho</option>
          <option value="Agosto">Agosto</option>
          <option value="Setembro">Setembro</option>
          <option value="Outubro">Outubro</option>
          <option value="Novembro">Novembro</option>
          <option value="Dezembro">Dezembro</option>
        </datalist>

        <label htmlFor="ano">
          Ano
          <input
            type="number"
            min={1900}
            max={2099}
            step={1}
            id="ano"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            onBlur={(e) => setAno(e.target.value)}
          />
        </label>

      </div>

      <div className="inf">

        <button type="submit" onClick={handleDownload}>Exportar</button>

      </div>
    </Popup>
  );
}
