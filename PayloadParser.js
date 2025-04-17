function parseUplink(device, payload)
{
	function ExtractTagData(tagValuesObject){
        v = null;
        q = null;
        ts = null;
        return {
            v: (tagValuesObject["v"]),
            q: tagValuesObject["q"],
            ts: new Date(tagValuesObject["ts"]).toUTCString()
        }
    }

    var N3uronData = payload.asJsonObject();
	
    env.log(N3uronData);
 
   //Recorremos cada "tag" del array del json y procesamos lo que nos interesan
  for (let tag in N3uronData) {
  
        switch (tag){
            case "/SOP/Ia":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("Ia");
                    etv1.updateCurrentSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                    //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                });
                break;
/*
           case "/SOP/Ib":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("Ib");
                    etv1.updateCurrentSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                    //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                });
                break;

            case "/SOP/Ic":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("Ic");
                   etv1.updateCurrentSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                   //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                });
                break;
*/
                case "/SOP/V_LL":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("V_LL");
                    etv1.updateVoltageSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                    //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                });
                break;

                case "/SOP/Cos":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("Cos");
                    etv1.updateCosPhiSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

                case "/SOP/PAtot":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("PAtot");
                    etv1.updateActivePowerSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                    //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                });
                break;

                 case "/SOP/EnergActTot":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("EnergActTot");
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

        }
   }
}