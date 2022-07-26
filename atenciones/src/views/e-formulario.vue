<template>
  <v-layout class="imagentrasera esmerilado">
    <v-container class="esmerilado">
      <v-row justify="space-around">
        <v-col>
          <v-select
            class="borde"
            :items="tipoAtencion"
            label="tipoAtencion"
            name="Tipo"
            hide-details
            single-line
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            class="borde"
            type="datetime-local"
            label="Fecha y hora de la atención"
            name="FechaAtencion"
            hide-details
            single-line
          ></v-text-field>
        </v-col>
        <v-col>
          <v-select
            class="borde"
            :items="lugarAtencion"
            label="Lugar de la atención"
            name="lugarAtencion"
            hide-details
            single-line
          ></v-select>
        </v-col>
      </v-row>

      <v-row justify="space-around">
        <v-col>
          <v-text-field
            name="nombre"
            class="borde"
            label="Nombre paciente"
            required
            hide-details
            single-line
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            name="dni"
            class="borde"
            label="DNI"
            required
            hide-details
            single-line
          ></v-text-field
        ></v-col>
        <v-col
          ><v-select
            class="borde"
            :items="sexo"
            label="Sexo"
            name="sexo"
            hide-details
            single-line
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            class="borde"
            label="Edad"
            name="edad"
            hide-details
            single-line
            type="number"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            class="borde"
            label="Historia clínica"
            name="historiaclinica"
            hide-details
            single-line
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="space-around">
        <v-col>
          <v-select
            class="borde"
            :items="empresa"
            label="Empresa"
            name="empresa"
            hide-details
            single-line
          ></v-select>
        </v-col>
        <v-col>
          <v-select
            class="borde"
            :items="medico"
            label="Médico tratante"
            name="medico"
            hide-details
            single-line
          ></v-select
        ></v-col>
      </v-row>

      <v-row justify="space-around"
        ><v-col>
          <v-select
            class="borde"
            :items="DesMotivoConsulta"
            label="Motivo principal de consulta"
            name="motivo1"
            hide-details
            single-line
          ></v-select> </v-col
        ><v-col>
          <v-select
            class="borde"
            :items="DesMotivoConsulta"
            label="Motivo secundario de consulta"
            name="motivo2"
            hide-details
            single-line
          ></v-select></v-col
        ><v-col>
          <v-select
            class="borde"
            :items="DesDiagnosticoFph"
            label="Diagnóstico"
            name="diagnóstico"
            hide-details
            single-line
          ></v-select
        ></v-col>
      </v-row>
      <v-row justify="space-around"
        ><v-col>
          <v-select
            class="borde"
            :items="aparatoComprometido"
            label="Aparato comprometido"
            name="aparatoComprometido"
            hide-details
            single-line
          ></v-select></v-col
        ><v-col>
          <v-select
            class="borde"
            :items="medicacion"
            label="Medicacion indicada"
            name="medicacion1"
            hide-details
            single-line
          ></v-select
        ></v-col>
        <v-col>
          <v-text-field
            class="borde"
            label="Cant"
            name="cant1"
            hide-details
            single-line
            type="number"
          ></v-text-field
        ></v-col>

        <v-col>
          <v-select
            class="borde"
            :items="medicacion"
            label="Medicacion indicada 2"
            name="medicacion2"
            hide-details
            single-line
          ></v-select
        ></v-col>
        <v-col>
          <v-text-field
            class="borde"
            label="Cant"
            name="cant2"
            hide-details
            single-line
            type="number"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col>
          <v-text-field
            class="borde"
            type="date"
            label="última PCR"
            name="ultimaPCR"
            hide-details
            single-line
            v-model="ultimaPCR"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-select
            class="borde"
            :items="sino"
            label="Se realizó prueba de antígeno?"
            name="pruebAntigeno"
            hide-details
            single-line
          ></v-select></v-col
        ><v-col>
          <v-select
            class="borde"
            :items="resultado"
            label="Resultado"
            name="resultado"
            hide-details
            single-line
          ></v-select
        ></v-col>
        <v-col>
          <v-select
            class="borde"
            :items="seTraslado"
            label="se trasladó?"
            name="seTraslado"
            hide-details
            single-line
          ></v-select
        ></v-col>
        <v-col>
          <v-select
            class="borde"
            :items="sino"
            label="Descanso médico"
            name="descanso"
            hide-details
            single-line
          ></v-select
        ></v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>
<script>
import config from "../../configuraciones.js";
import axios from "axios";

export default {
  components: { config },
  data() {
    return {
      ultimaPCR: "1111-11-11",
      motivoAtencion: ["INGRESO", "CONTROL"],
      sino: ["SI", "NO"],
      seTraslado: ["NO", "AMBULANCIA", "PARTICULAR"],
      resultado: ["POSITIVO", "NEGATIVO", "-NA"],
      tipoAtencion: [
        "CONTROL ENFERMEDAD",
        "CONTROL EVENTO",
        "ENFERMEDAD",
        "EVENTO",
      ],
      lugarAtencion: ["PTF JOSEMARIA", "PTF FDS", "USB"],
      sexo: ["F", "M"],

      DesMotivoConsulta: [
        "-NA",
        "Alteración aguda de la visión",
        "Alteración de la conducta",
        "Arritmia",
        "Atragantamiento",
        "Calambres",
        "Cianosis",
        "Complicaciones de herida quirúrgica",
        "Constipación",
        "Control de signos vitales",
        "Convulsiones",
        "Cuerpo extraño en ojo derecho",
        "Cuerpo extraño en ojo izquierdo",
        "cuerpo extraño en ojos",
        "Cuerpo extraño en orificio natural",
        "Curación",
        "Desmayo",
        "Diagnóstico de...(solicitante médico)",
        "Diarrea",
        "Dificultad para hablar",
        "Dificultad respiratoria",
        "Dolor abdominal",
        "Dolor anal",
        "Dolor cervical",
        "Dolor de boca",
        "Dolor de cabeza",
        "Dolor de extremidad",
        "Dolor de garganta",
        "Dolor de pecho",
        "Dolor en el pecho",
        "Dolor lumbar",
        "Dolor testicular",
        "Dolor toracico",
        "Embarazo con problemas",
        "Epistaxis",
        "Escalofrios",
        "Fiebre",
        "Hemorragia anal",
        "Hemorragia genital",
        "Hemorragia por boca",
        "Hinchazón o edema",
        "Hipertensión arterial",
        "Hipotensión arterial",
        "Ictericia",
        "Ingestion de...",
        "Llanto inconsolable (solo en menores de 3 años)",
        "Malestar general",
        "Mareos",
        "Mordedura",
        "Náuseas",
        "Palidez",
        "Palpitaciones",
        "Paresia",
        "Parestesias",
        "Pérdida de Conciencia",
        "Perdida de control de esfinteres",
        "Picadura",
        "Problema ocular",
        "Problema urinario o genital",
        "Problemas del oido",
        "Quemadura",
        "Reacción cutánea",
        "Rinitis",
        "Sindrome Gripal",
        "Solicitud de precario",
        "Sudoración",
        "Temblor",
        "Tos o expectoración",
        "Trauma de abdomen",
        "Trauma de cara",
        "Trauma de craneo",
        "Trauma de cuello",
        "Trauma de miembro inferior",
        "Trauma de miembro superior",
        "Trauma de pelvis",
        "Trauma de torax",
        "Trauma dorso lumbar",
        "Victima de abuso sexual",
        "Victima de accidente vehicular",
        "Victima de agresión o riña",
        "Victima de ahorcamiento",
        "Victima de caída de altura",
        "Victima de derrumbe o aplastamiento",
        "Victima de electrocución",
        "Victima de explosión",
        "Victima de gases tóxicos",
        "Victima de herida de arma blanca",
        "Victima de herida de arma de fuego",
        "Victima de incendio",
        "Vómitos",
      ],
      DesDiagnosticoFph: [
        "Atención de enfermería",
        "CARV   Accidente cerebrovasclar/ictus/apoplejía   (301)",
        "CARV   Arritmia cardíaca NE   (304)",
        "CARV   Choque, no clasificado en otra parte   (307)",
        "CARV   Dolor cardíaco/atribuido corazón   (320)",
        "CARV   Elevación de la presión arterial   (329)",
        "CARV   Flebitis y tromboflebitis   (339)",
        "CARV   Hipotensión sin especificar   (345)",
        "CARV   Infarto agudo de miocardio   (347)",
        "CARV   Insuficiencia cardíaca   (349)",
        "CARV   Isquemia cardíaca con angina   (351)",
        "CARV   Isquemia cardíaca sin angina   (352)",
        "CARV   Otros signos/síntomas cardiovasculares   (466)",
        "CARV   Parada cardiorrespiratoria   (481)",
        "DERM   Otros signos/síntomas de la piel y faneras   (467)",
        "DERM   Salpullido y otras erupciones cutáneas no especificadas   (487)",
        "DERM   Tumefacción, masa o prominencia de la piel y del tejido subcutáneo localizadas   (504)",
        "DIGES   Abdomen agudo   (300)",
        "DIGES   Cuerpo extraño en tracto digestivo   (311)",
        "DIGES   Diarrea   (317)",
        "DIGES   Dispepsia/indigestión   (318)",
        "DIGES   Dolor abdominal generalizado/retortijones   (319)",
        "DIGES   Dolor de estómago/epigástrico   (321)",
        "DIGES   Estreñimiento   (334)",
        "DIGES   Hematemesis/vómito de sangre   (341)",
        "DIGES   Ictericia   (346)",
        "DIGES   Melena   (356)",
        "DIGES   Otros dolores abdominales localizados   (469)",
        "DIGES   Otros signos/síntomas del aparato digestivo   (468)",
        "DIGES   Rectorragia/hemorragia rectal   (484)",
        "DIGES   Signos/síntomas de boca, lengua y labios   (491)",
        "DIGES   Signos/síntomas de dientes y encías   (493)",
        "DIGES   Vómito   (506)",
        "EMBAR   Hemorragia antes del parto   (343)",
        "EMBAR   Otros problemas/enfermedades del embarazo/parto   (470)",
        "EMBAR   Signos/síntomas de la mama/lactancia   (496)",
        "EMBAR   Vómito/náusea del embarazo   (507)",
        "GENIT   Dolor genital femenino   (324)",
        "GENIT   Orquitis/epididimitis   (461)",
        "GENIT   Otros signos/síntomas del aparato genital del hombre   (471)",
        "GENIT   Otros signos/síntomas genital/mamas, mujer   (472)",
        "GENIT   Sangrado intermenstrual   (488)",
        "GENIT   Sangrado posmenopáusico   (489)",
        "HEMAT   Adenopatía/dolor en ganglio linfático   (302)",
        "HEMAT   Púrpura/alteraciones de la coagulación   (483)",
        "HEMAT   Signos/síntomas de la sangre/órganos hematopoyéticos   (497)",
        "INESP   Alergia/reacciones alérgicas NE   (303)",
        "INESP   Desmayo/síncope   (316)",
        "INESP   Dolor generalizado/múltiple   (323)",
        "INESP   Dolor torácico NE   (325)",
        "INESP   Edema, no clasificado en otra parte   (326)",
        "INESP   Escalofríos   (332)",
        "INESP   Fiebre   (338)",
        "INESP   MAM Leve",
        "INESP   MAM Moderado",
        "INESP   MAM Grave",
        "INESP   Otras enfermedades infecciosas NE   (462)",
        "INESP   Otras enfermedades virales con exantema   (465)",
        "INESP   Otros problemas sociales   (479)",
        "INESP   Somnolencia, estupor y coma   (501)",
        "INESP   Alta COVID19",
        "INESP   Confirmado COVID19 x epidemiologia",
        "INESP   Confirmado COVID19 x hisopado",
        "INESP   Contacto estrecho COVID19",
        "INESP   Sospecha COVID19",
        "LOCOM   Esguinces y distensiones NE   (333)",
        "LOCOM   Otros signos/síntomas del aparato locomotor   (473)",
        "LOCOM   Signos/síntomas articulares NE   (490)",
        "LOCOM   Signos/síntomas de la espalda   (494)",
        "LOCOM   Signos/síntomas del cuello   (492)",
        "LOCOM   Signos/síntomas lumbares   (495)",
        "METAB   Deshidratación   (315)",
        "METAB   Hipoglucemia   (344)",
        "METAB   Otros problemas endocrinos/metabólicos/nutricionales   (474)",
        "METAB   Pérdida de peso   (482)",
        "NEURO   Cefalea   (306)",
        "NEURO   Convulsiones/crisis convulsivas   (310)",
        "NEURO   Mareo y desvanecimiento   (354)",
        "NEURO   Meningitis/encefalitis   (357)",
        "NEURO   Movimientos involuntarios anormales   (358)",
        "NEURO   Otros signos/síntomas neurológicos   (475)",
        "NEURO   Vértigo/vahído   (505)",
        "OBITO   Fallecimiento/muerte   (336)",
        "OFTAL   Ojo rojo   (460)",
        "OFTAL   Otras enfermedades/problemas de salud de ojos/anejos   (463)",
        "OTOL   Cuerpo extraño en el oído   (312)",
        "OTOL   Dolor de oído/oreja   (322)",
        "OTOL   Otros signos/síntomas del oído/oreja   (476)",
        "OTOL   Síndromes vertiginosos   (498)",
        "OTRO   Eval/Examen médico parcial/Pre-op.   (335)",
        "OTRO   Medicación/prescripción/renovación/inyección    (355)",
        "OTRO  Asistido por otro  sistema",
        "PSICO   Otros signos/síntomas psicológicos/mentales   (477)",
        "PSICO   Síntomas y signos que involucran el estado emocional   (500)",
        "PSICO   Síntomas y signos que involucran la apariencia y el comportamiento   (499)",
        "RESP   Bronquitis/bronquiolitis aguda   (305)",
        "RESP   Cuerpo extraño nariz/laringe/bronquios   (313)",
        "RESP   Enfermedad pulmonar obstructiva crónica (EPOC)   (330)",
        "RESP   Epistaxis/hemorragia nasal   (331)",
        "RESP   Fatiga respiratoria/disnea   (337)",
        "RESP   Gripe   (340)",
        "RESP   Infección respiratoria aguda del tracto superior   (348)",
        "RESP   Laringitis/traqueítis aguda   (353)",
        "RESP   Neumonía   (359)",
        "RESP   Otros signos/síntomas del aparato respiratorio   (478)",
        "RESP   Respiración jadeante/sibilante   (485)",
        "TOXIC   Complicación de tratamiento médico   (309)",
        "TOXIC   Efectos tóxicos de sustancias no medicamentosas   (328)",
        "TOXIC   Intoxicaciones/envenenamientos/sobredosificación por medicamentos   (350)",
        "TRAUM   Efectos adversos factores físicos   (327)",
        "TRAUM   Traumatismo/lesión NE   (502)",
        "TRAUM   Traumatismos/lesiones múltiples   (503)",
        "UROL   Cistitis/otras infecciones urinarias   (308)",
        "UROL   Hematuria   (342)",
        "UROL   Otros signos/síntomas del aparato urinario   (480)",
        "UROL   Retención urinaria   (486)",
      ],
      empresa: [
        "20 DE JUNIO JM",
        "ALH GEOFISICA JM",
        "AMC JM",
        "ANDESAL JM",
        "ANSA  FDS",
        "BACHI JM",
        "BASTRONIC JM ",
        "BENELBAZ FDS",
        "BENELBAZ FDS",
        "BILLIA FDS",
        "BILLIA JM",
        "BOART FDS ",
        "BOART JM",
        "CHICONI JM",
        "CINCA JM Y FDS",
        "CONSULAR JM ",
        "CYM JM",
        "DELTA FDS",
        "DELTA JM",
        "DESARROLLO TRAMA JM ",
        "ECOMINERA JM",
        "EMERGENCIAS JM ",
        "FALCON (AGVFD) FDS",
        "FDS",
        "FLUOR JM",
        "GRIFFITH FDS",
        "HIDROAR FDS",
        "HIDROAR JM",
        "HUARPE JM",
        "IMDEX FDS",
        "IMSE FDS",
        "JOSEMARIA",
        "KP FDS",
        "KP JM",
        "LYG JM",
        "MERCADO (FGM)  JM",
        "MERCADO (FGM) FDS",
        "MINITECH JM ",
        "MODULAR HOME FDS",
        "MODULAR HOME JM",
        "MTZ JM ",
        "NIELSEN FDS",
        "PAP FDS",
        "PAP JM ",
        "RCH (cerda) FDS",
        "SAN-OD FDS",
        "SAN-OD JM",
        "SRK FDS",
        "SRK JM",
        "TECNO MOTOR",
        "TERRASERVICE FDS",
        "TRAMA",
        "TRANSPORTE CRUZ FDS",
        "VINOX JM ",
        "ZLATO JM",
      ],
      aparatoComprometido: [
        "CARDIOVASCULAR",
        "RESPIRATORIO",
        "NEUROLOGICO",
        "SOMA",
        "DERMATOLOGICO",
        "OFTALMOLOGICO",
        "OTORRINO",
        "DIGESTIVO",
        "GENITOURINARIO",
        "EMBARAZO",
        "HEMATOLOGICO",
        "METABOLICO",
        "PSIQUIATRICO",
        "TOXICOLOGICO",
      ],
      medicacion: [
        "-NA",
        "ACEMUK (N-Acetilcisteina) 600 Comp eferv",
        "Acetazolamida Comp x 250 mg",
        "Aciclovir crema Pomo",
        "Aciclovir oral Comp x 400 mg",
        "Ácido Acetil Salicílico Comp x 100 mg",
        "Ácido tranexámico Amp x 5 ml",
        "Adenosina Amp x 2 ml",
        "Adrenalina amp (FM)",
        "Agua destilada Amp x 5 ml",
        "Amiodarona Amp x 3 ml",
        "Amlodipina Comp x 10 mg",
        "Amoxicilina + Clavulanato Comp x 1 mg",
        "Amoxicilina Comp x 500 mg",
        "Amoxicilina/ambroxol comp (FM)",
        "Ampicilina/Sulbactam (FM) ",
        "Antimigrañoso (Migral) Comp",
        "Atenolol Comp x 50 mg",
        "Atorvastatin (FM)",
        "Azitromicina Comp x 500 mg",
        "Bactrim Forte (FM)",
        "Bencidamina Comp(FM)",
        "Bicarbonato de sodio Fco x 100 ml",
        "Budesonide Inhal Aer x 200 mcg",
        "Butil bromuro de Hioscina Amp x 1 ml",
        "Butil bromuro de Hioscina comp Comp x 20 mg",
        "Caladryl topico (Difenhidramina) Pomo",
        "Caramelos antigripales con benzocaina",
        "Carbón activado Bolsa x 30 mg",
        "Cefalexina Comp x 500 mg",
        "Cefalotin amp (FM)",
        "Ceftriaxona amp (FM)",
        "Ciprofloxacina + Dexametasona Gotas oftal",
        "Ciprofloxacina amp (FM)",
        "Ciprofloxacina Comp x 500 mg",
        "Claritromicina Comp x 500 mg",
        "Clopilgrel comp (FM)",
        "Cloruro de potasio Amp x 5 ml",
        "Clotrimazol Crema x 400 mg",
        "Contractil (Ácido ascórbico + Extracto Seco de Ruscus Aculeatus + Hesperidina Metilchalcona) Comp",
        "Crema atihemorroidal ( Clorhidrato de Lidocaina 2.5% - 17- Valerato Betametasona 0.05% - Clorhidrato de Fenilefrina) Pomo",
        "Daflon 500mg (FM)",
        "Decidex (FM)",
        "Dexametasona Amp x 2 ml",
        "Dexametasona comp (FM)",
        "Dextrosa al 25%  Baxter x 500ml ",
        "Dextrosa al 5% Baxrter x 500 ml",
        "Diazepam Amp x 2 ml",
        "Diclofenac + Pridinol Comp x 50/4 mg",
        "Diclofenac Amp x 3ml",
        "Diclofenac Comp x 75 mg",
        "Diclofenac topico Pomo crema",
        "Difenhidramina Amp x 2 ml",
        "Difenhidramina Comp x 25 mg",
        "Difenilhidantoina (Fenitoina) Amp x 2 ml",
        "Digoxina Amp x 1 ml",
        "Dimenhidrinato Comp x 50 mg",
        "Dipirona Amp x 2 ml",
        "Dipirona Comp x 500 mg",
        "Dobutamina Amp x 5 ml",
        "Dopamina, clorhidrato Amp x 5 ml",
        "Enalapril Comp x 10 mg",
        "Enemol Pomo",
        "Eritromicina Comp x 500 mg",
        "Famotidina Comp x 20 mg",
        "Fenobarbital Amp x 2 ml",
        "Fentanilo Amp x 5 ml",
        "Flumazenil Amp x 0,5 ml",
        "Furosemida Amp x 2 ml",
        "Furosemida Comp x 40 mg",
        "Gluconato de calcio 10% Amp x 4 ml",
        "Glucosado hipertónico al 25% Amp x 10 ml",
        "Gotas Oticas con ATB (Ciriax Otics) gotas oticas x 5 ml",
        "Haloperidol Amp x 1 ml",
        "Hidroclorotiazida Comp x 50 mg",
        "Hidrocortisona Fco amp polvo p/rest",
        "Hidróxido Al + Hidróxido Mg Comp mast.",
        "Hiosina + Dipirona Amp x 5 ml",
        "Ibuprofeno 400 mg Comp",
        "Ibuprofeno Comp x 600 mg",
        "Insulina Corriente Humana Amp x 10 ml",
        "Ipratropio bromuro Fco gotero x 20 ml",
        "Isoproterenol Amp x 20 ml",
        "Isosorbide Dinitrato Comp SL x 5 mg",
        "Jarabe TOS Ambril(Ambroxol - Clorhidrato)",
        "Jarabe TOS Mucoprednibron (Ambroxol - Butetamato)",
        "Ketorolac Amp x 1 ml",
        "Ketorolac Comp SL X 10 mg",
        "Labetalol Amp x 4 ml",
        "Lactulon (Lactulon) 250 ml",
        "Lagrimas naturales Gotas oftalm",
        "Levofloxacina Comp x 500 mg",
        "Lidocaina 2% Amp x 5 ml",
        "Lidocaina jalea Tubo",
        "Loperamida Comp x 2 mg",
        "Loratadina/betametasona comp (FM)",
        "Lorazepam Amp x 2 ml",
        "Lorazepam Comp SL x 1 mg",
        "Losartán Comp x 50 mg",
        "Manitol al 15% Baxter x 500 ml",
        "Metoclopramida Amp x 2 ml",
        "Metoclopramida Comp x 10 mg",
        "Midazolan Amp x 3 ml",
        "Morfina, clorhidrato Amp x 1 ml",
        "Nalbufina Amp x 1ml",
        "Naloxona Amp x 1 ml",
        "Nifedipina comp (FM)",
        "Nitroglicerina Amp x 3 ml",
        "Nitroprusiato de sodio Fco amp polvo p/rest",
        "Noradrenalina Amp x 4 ml",
        "Omeprazol Comp x 20 mg",
        "Omeprazol Fco amp polvo p/ rest",
        "Paracetamol + Bromexina Comp",
        "Paracetamol Comp x 1 gr",
        "Penicilina G benzatinica (FM)",
        "Quraplus Comp",
        "Rifamicina Spray x 30 ml",
        "Salbutamol  100 mcg inhal Aer x 200 dosis",
        "Salbutamol solución p/neb Gotas x 5 mg/ml",
        "Sincerum Gotas oticas x 5 ml",
        "Solucion fisiológica Baxter x 500 ml",
        "Solución ringer lactato Baxter x 500 ml",
        "Succinilcolina Amp x 2 ml",
        "Sulfadiazina de Plata Unguento x 400 grs",
        "Sulfato de Atropina Amp x 1 ml",
        "Sulfato de Magnesio al 25% Amp x 5 ml",
        "Te vick",
        "Tobramicina + Dexametasona Gotas oftal.",
        "Tramadol + paracetamol Comp x 37,5/325 mg",
        "Tramadol Gotas (FM)",
        "Vaselina Fco x 1 ltr",
        "Vitacortil ( Betametasona + gentamicina + clotrimazol) ( cremas para dermatitis)",
      ],
      medico: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      await axios
        .get("http://localhost/api/medicotratante", this.axiosHeaders)
        .then((res) => {
          //console.log(res.data[0].MedicoTratante)
          for (var i in res.data) this.medico.push(res.data[i].MedicoTratante);
        })
        .catch((e) => {
          console.log(e);
          return;
        });
    },
  },
};
</script>
<style>
.imagentrasera {
  height: 100%;
  width: 100%;
  background: url("../assets/img/imagentrasera.png") no-repeat center center;
  background-size: cover;
}

.esmerilado {
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  padding: 10px;
}

.borde {
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 5px solid rgba(255, 255, 255, 0.6);
  margin: 10px;
  padding: 5px 15px;
}
</style>
