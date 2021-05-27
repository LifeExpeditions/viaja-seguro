//# MODELS
import User from "../../models/User";
import XLSX from "xlsx";
import Operator from "../../models/Operator";
export default {
  Mutation: {
    uploadData: async (_) => {
      try {
        const datas = XLSX.readFile("data/cusco.xls");
        const datasbook = datas.SheetNames;

        const sheet = datasbook[0];
        const dataExel = XLSX.utils.sheet_to_json(datas.Sheets[sheet]);

        dataExel.map(async (operator) => {
          let region = operator["UBIGEO"].split("/", 3);
          let operatorinput = {
            razon_social: operator["RAZON SOCIAL"],
            ruc: operator["RUC"],
            nombre_comercial: operator["NOMBRE COMERCIAL"],
            direccion: operator["DIRECCION"],
            departamento: region[0],
            provincia: region[1],
            distrito: region[2],
            telefono_1: operator["TELEFONO 1"],
            telefono_2: operator["TELEFONO 2"],
            email: operator["MAIL"],
            web: operator["WEB"],
            grupo: operator["GRUPO"],
            clase: operator["CLASE"],
            tipo: operator["TIPO"],
            categoria: operator["CATEGORIA"],
            especialidad: operator["ESPECIALIDAD"],
            nro_certificado: operator["NRO. CERTIFICADO"],
            fecha_expedicion: operator["FECHA EXPEDICION"],
            fecha_expiracion: operator["FECHA EXPIRACIONL"],
            representante_legal: operator["REPRESENTANTE LEGAL"],
            idioma: operator["IDIOMA"],
            centro_formacion: operator["CENTRO FORMACION"],
          };
          const oper = new Operator(operatorinput);
          await oper.save();
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
