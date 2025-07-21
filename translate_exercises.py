import json

# Translation dictionary for exercise names
translations = {
    "5 dot drills agility exercise": "Ejercicio de agilidad 5 puntos",
    "90 90 hip stretch": "Estiramiento de cadera 90-90",
    "atg split squat": "Sentadilla dividida ATG",
    "ab wheel rollout": "Rodillo abdominal",
    "adductor magnus stretch": "Estiramiento del aductor mayor",
    "barbell squat": "Sentadilla con barra",
    "bodyweight sumo squat": "Sentadilla sumo con peso corporal",
    "band lying hip external rotation": "Rotación externa de cadera acostado con banda",
    "band seated hip external rotation": "Rotación externa de cadera sentado con banda",
    "band seated hip internal rotation": "Rotación interna de cadera sentado con banda",
    "band side lying clam": "Almeja lateral con banda",
    "band side lying leg lift": "Elevación de pierna lateral con banda",
    "banded donkey kicks": "Patadas de burro con banda",
    "banded fire hydrant": "Hidrante con banda",
    "banded glute bridge": "Puente de glúteos con banda",
    "banded glute kickbacks": "Patadas de glúteos con banda",
    "banded kettlebell goblet squat": "Sentadilla copa con kettlebell y banda",
    "banded seated hip abduction": "Abducción de cadera sentado con banda",
    "banded single leg glute bridge": "Puente de glúteos una pierna con banda",
    "banded standing glute kickback": "Patada de glúteos de pie con banda",
    "banded step up": "Subida al cajón con banda",
    "banded thigh fly": "Vuelo de muslo con banda",
    "banded walk": "Caminata con banda",
    "barbell deadlift": "Peso muerto con barra",
    "barbell glute bridge two legs on bench": "Puente de glúteos con barra dos piernas en banco",
    "barbell glute bridge": "Puente de glúteos con barra",
    "barbell good morning": "Buenos días con barra",
    "barbell hack squat": "Sentadilla hack con barra",
    "barbell hip thrust": "Empuje de cadera con barra",
    "barbell jump squat": "Sentadilla con salto con barra",
    "barbell lateral lunge": "Zancada lateral con barra",
    "barbell pin squat": "Sentadilla con pines con barra",
    "barbell romanian deadlift": "Peso muerto rumano con barra",
    "barbell single leg deadlift": "Peso muerto una pierna con barra",
    "barbell single leg hip thrust": "Empuje de cadera una pierna con barra",
    "barbell step up": "Subida al cajón con barra",
    "barbell sumo deadlift": "Peso muerto sumo con barra",
    "barbell sumo squat": "Sentadilla sumo con barra",
    "bench glute flutter kicks": "Patadas de glúteos en banco",
    "bird dog": "Perro pájaro",
    "bodyweight box squat": "Sentadilla en cajón con peso corporal",
    "bodyweight bulgarian split squat": "Sentadilla búlgara con peso corporal",
    "bodyweight plie squat": "Sentadilla plié con peso corporal",
    "bodyweight single leg deadlift": "Peso muerto una pierna con peso corporal",
    "box jump 1 to 2": "Salto al cajón 1 a 2",
    "box jump 2 to 1": "Salto al cajón 2 a 1",
    "box jump to pistol squat": "Salto al cajón a sentadilla pistola",
    "box pistol squat": "Sentadilla pistola en cajón",
    "bridge hip abduction": "Abducción de cadera en puente",
    "bulgarian jump squat": "Sentadilla búlgara con salto",
    "butterfly stretch": "Estiramiento mariposa",
    "cable donkey kickback": "Patada de burro con cable",
    "cable forward lunge": "Zancada frontal con cable",
    "cable front squat": "Sentadilla frontal con cable",
    "cable hip abduction": "Abducción de cadera con cable",
    "cable hip extension": "Extensión de cadera con cable",
    "cable hips adduction": "Aducción de cadera con cable",
    "cable kneeling pull through": "Jalón arrodillado con cable",
    "cable pull through": "Jalón con cable",
    "cable squat": "Sentadilla con cable",
    "cossack squat": "Sentadilla cosaca",
    "curtsey squat": "Sentadilla reverencia",
    "decline bench dumbbell lunge": "Zancada con mancuernas en banco declinado",
    "depth jump to hurdle hop": "Salto en profundidad a salto de valla",
    "donkey kick on leg extension machine": "Patada de burro en máquina de extensión",
    "donkey kick on smith machine": "Patada de burro en máquina Smith",
    "donkey kicks": "Patadas de burro",
    "duck walk": "Caminata de pato",
    "dumbbell glute bridge": "Puente de glúteos con mancuernas",
    "dumbbell goblet squat": "Sentadilla copa con mancuerna",
    "dumbbell good morning": "Buenos días con mancuernas",
    "dumbbell iron cross": "Cruz de hierro con mancuernas",
    "dumbbell jump squat": "Sentadilla con salto con mancuernas",
    "dumbbell lateral step up": "Subida lateral con mancuernas",
    "dumbbell lunge": "Zancada con mancuernas",
    "dumbbell pull through": "Jalón con mancuernas",
    "dumbbell rear lunge": "Zancada trasera con mancuernas",
    "dumbbell romanian deadlift": "Peso muerto rumano con mancuernas",
    "dumbbell single leg deadlift": "Peso muerto una pierna con mancuernas",
    "dumbbell split jump": "Salto dividido con mancuernas",
    "dumbbell squat": "Sentadilla con mancuernas",
    "dumbeel step up": "Subida al cajón con mancuernas",
    "dumbell reverse lunge": "Zancada reversa con mancuernas",
    "exercise ball wall squat": "Sentadilla en pared con pelota",
    "fire hydrant": "Hidrante",
    "foam roller glutes": "Rodillo de espuma para glúteos",
    "foam roller inner thigh adductor stretch": "Estiramiento aductor muslo interno con rodillo",
    "frog pose mandukasana": "Postura de rana mandukasana",
    "frog pump": "Bombeo de rana",
    "front plank with arm and leg lift": "Plancha frontal con elevación de brazo y pierna",
    "glute bridge": "Puente de glúteos",
    "glute bridge one leg on bench": "Puente de glúteos una pierna en banco",
    "glute bridge on bench": "Puente de glúteos en banco",
    "glute ham raise": "Elevación de glúteo-isquiotibiales",
    "glute kickback machine": "Máquina de patadas de glúteos",
    "hip adduction machine": "Máquina de aducción de cadera",
    "happy baby pose": "Postura del bebé feliz",
    "hip abduction machine": "Máquina de abducción de cadera",
    "high knee lunge on bosu ball": "Zancada con rodilla alta en bosu",
    "high knee run": "Carrera con rodillas altas",
    "high knee squat": "Sentadilla con rodillas altas",
    "hip circles stretch": "Estiramiento de círculos de cadera",
    "hip extension on bench": "Extensión de cadera en banco",
    "hip thrust machine": "Máquina de empuje de cadera",
    "hip thrust on the leg extension machine": "Empuje de cadera en máquina de extensión",
    "inner thigh side stretch": "Estiramiento lateral del muslo interno",
    "jump squat": "Sentadilla con salto",
    "kettlebell clean and jerk": "Cargada y envión con kettlebell",
    "kettlebell clean and press": "Cargada y press con kettlebell",
    "kettlebell figure 8": "Figura 8 con kettlebell",
    "kettlebell single leg deadlift": "Peso muerto una pierna con kettlebell",
    "kettlebell split snatch": "Arrancada dividida con kettlebell",
    "kettlebell swings": "Balanceos con kettlebell",
    "kettlebell thruster": "Thruster con kettlebell",
    "kettlebell front squat": "Sentadilla frontal con kettlebell",
    "kicks leg bent": "Patadas con pierna flexionada",
    "kneeling hip flexor stretch 1 360x360": "Estiramiento flexor de cadera arrodillado",
    "kneeling hip flexor stretch": "Estiramiento flexor de cadera arrodillado",
    "kneeling jump squat": "Sentadilla con salto arrodillado",
    "kneeling leg out adductor stretch": "Estiramiento aductor pierna extendida arrodillado",
    "kneeling single leg kick": "Patada una pierna arrodillado",
    "landmine deadlift": "Peso muerto con barra landmine",
    "landmine lunge": "Zancada con barra landmine",
    "landmine press": "Press con barra landmine",
    "landmine squat": "Sentadilla con barra landmine",
    "lateral leg swings": "Balanceos laterales de pierna",
    "lever side hip abduction": "Abducción lateral de cadera en palanca",
    "lever side hip adduction": "Aducción lateral de cadera en palanca",
    "lever standing hip extension": "Extensión de cadera de pie en palanca",
    "lever standing rear kick": "Patada trasera de pie en palanca",
    "lying glute stretch": "Estiramiento de glúteos acostado",
    "one arm dumbbell snatch": "Arrancada con mancuerna un brazo",
    "one arm kettlebell snatch exercise": "Ejercicio de arrancada con kettlebell un brazo",
    "one arm kettlebell swing": "Balanceo con kettlebell un brazo",
    "pelvic tilt": "Inclinación pélvica",
    "pendulum squat": "Sentadilla péndulo",
    "pin squat": "Sentadilla con pines",
    "piriformis stretch": "Estiramiento del piriforme",
    "pistol squat to box": "Sentadilla pistola al cajón",
    "plank leg lift": "Elevación de pierna en plancha",
    "plank with arm and leg lift": "Plancha con elevación de brazo y pierna",
    "pull through hips": "Jalón a través de caderas",
    "resistance band hip thrust": "Empuje de cadera con banda de resistencia",
    "resistance band hip thrusts on knees": "Empuje de cadera en rodillas con banda",
    "resistance band lateral walk": "Caminata lateral con banda de resistencia",
    "resistance band overhead squat": "Sentadilla overhead con banda de resistencia",
    "resistance band reverse hyperextension": "Hiperextensión reversa con banda",
    "resistance band toe touch": "Toque de dedos con banda de resistencia",
    "reverse hack squat": "Sentadilla hack reversa",
    "reverse hyperextension machine": "Máquina de hiperextensión reversa",
    "reverse hyperextensions": "Hiperextensiones reversas",
    "reverse lunge knee": "Zancada reversa con rodilla",
    "reverse plank": "Plancha reversa",
    "snap jumps": "Saltos explosivos",
    "standing knee hugs": "Abrazos de rodilla de pie",
    "seated piriformis stretch": "Estiramiento del piriforme sentado",
    "side bridge hip abduction": "Abducción de cadera en puente lateral",
    "side hip abduction": "Abducción lateral de cadera",
    "side lying clam": "Almeja lateral acostado",
    "side lying feet raise": "Elevación de pies lateral acostado",
    "side lying hip adduction": "Aducción de cadera lateral acostado",
    "side plank hip adduction copenhagen adduction": "Aducción de cadera en plancha lateral Copenhagen",
    "single knee to chest stretch": "Estiramiento rodilla al pecho individual",
    "single leg box jump": "Salto al cajón una pierna",
    "single leg bridge": "Puente una pierna",
    "single leg dumbbell hip thrust": "Empuje de cadera una pierna con mancuernas",
    "single leg hip thrust jump": "Salto de empuje de cadera una pierna",
    "single leg reverse hyperextension": "Hiperextensión reversa una pierna",
    "single stiff leg deadlift": "Peso muerto pierna rígida individual",
    "sitting rotation hip stretch": "Estiramiento rotacional de cadera sentado",
    "sitting wide leg adductor stretch": "Estiramiento aductor piernas abiertas sentado",
    "skater": "Patinador",
    "smith machine good morning": "Buenos días en máquina Smith",
    "smith machine hip thrust": "Empuje de cadera en máquina Smith",
    "smith machine lunge": "Zancada en máquina Smith",
    "smith machine reverse kickback": "Patada reversa en máquina Smith",
    "split squat gymstick": "Sentadilla dividida con gymstick",
    "split squat": "Sentadilla dividida",
    "squat gymstick": "Sentadilla con gymstick",
    "squat mobility complex": "Complejo de movilidad de sentadilla",
    "squat on the abductor machine": "Sentadilla en máquina abductora",
    "standing cross leg hamstring stretch": "Estiramiento isquiotibiales piernas cruzadas de pie",
    "standing hamstring stretch": "Estiramiento de isquiotibiales de pie",
    "standing hip abduction 1": "Abducción de cadera de pie 1",
    "standing hip extension": "Extensión de cadera de pie",
    "standing leg circles": "Círculos de pierna de pie",
    "standing wide knees adductor stretch": "Estiramiento aductor rodillas abiertas de pie",
    "standing wide leg adductor stretch": "Estiramiento aductor piernas abiertas de pie",
    "static lunge": "Zancada estática",
    "step up single leg balance with bicep curl": "Subida una pierna con curl de bíceps",
    "stiff leg deadlift": "Peso muerto piernas rígidas",
    "straight leg kickback": "Patada pierna recta",
    "sumo plie dumbbell squat": "Sentadilla sumo plié con mancuernas",
    "supported one leg standing hip flexor and knee extensor stretch": "Estiramiento flexor cadera y extensor rodilla una pierna con apoyo",
    "swimming": "Natación",
    "swing gymstick": "Balanceo con gymstick",
    "trx pistol squat": "Sentadilla pistola TRX",
    "the box jump": "El salto al cajón",
    "towel leg curl": "Curl de piernas con toalla",
    "unilateral bridge": "Puente unilateral",
    "wall sit 238x360": "Sentadilla en pared",
    "zercher squat": "Sentadilla Zercher",
    "arm leg raise": "Elevación de brazo y pierna",
    "barbell rack pull": "Jalón en rack con barra",
    "belt squat": "Sentadilla con cinturón",
    "bodyweight hip thrust": "Empuje de cadera con peso corporal",
    "bodyweight lunges": "Zancadas con peso corporal",
    "bodyweight reverse lunge": "Zancada reversa con peso corporal",
    "bodyweight squat full version": "Sentadilla completa con peso corporal",
    "burpees": "Burpees",
    "curtsy lunge": "Zancada reverencia",
    "dumbbell bench squat": "Sentadilla en banco con mancuernas",
    "dumbbell cossack squat": "Sentadilla cosaca con mancuernas",
    "dumbbell deadlifts": "Peso muerto con mancuernas",
    "dumbbell forward leaning lunge": "Zancada inclinada hacia adelante con mancuernas",
    "dumbbell lunges": "Zancadas con mancuernas",
    "dumbbell sumo deadlift": "Peso muerto sumo con mancuernas",
    "dumbbell sumo squat": "Sentadilla sumo con mancuernas",
    "jefferson squat": "Sentadilla Jefferson",
    "kettlebell deadlift": "Peso muerto con kettlebell",
    "kettlebell goblet squat": "Sentadilla copa con kettlebell",
    "power lunge": "Zancada de potencia",
    "smith machine squat": "Sentadilla en máquina Smith",
    "trap bar jump squat": "Sentadilla con salto en barra trap",
    "wall ball": "Pelota en pared",
    "zercher deadlift": "Peso muerto Zercher"
}

# Your JSON data
data = [
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "5 dot drills agility exercise",
    "gif": "/gif/gluteo-cuadriceps/5-Dot-drills-agility-exercise-unscreen.gif",
    "series": "3x4",
    "nombre_español": "5 Dot drills agility exercise",
    "descripcion": "Ejercicio para glúteos y cuádriceps: 5 Dot drills agility exercise"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "90 90 hip stretch",
    "gif": "/gif/gluteo-cuadriceps/90-90-Hip-Stretch-unscreen.gif",
    "series": "3x4",
    "nombre_español": "90 90 Hip Stretch",
    "descripcion": "Ejercicio para glúteos y cuádriceps: 90 90 Hip Stretch"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "atg split squat",
    "gif": "/gif/gluteo-cuadriceps/ATG-Split-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "ATG Split Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: ATG Split Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "ab wheel rollout",
    "gif": "/gif/gluteo-cuadriceps/Ab-Wheel-Rollout-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Ab Wheel Rollout",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Ab Wheel Rollout"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "adductor magnus stretch",
    "gif": "/gif/gluteo-cuadriceps/Adductor-Magnus-Stretch-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Adductor Magnus Stretch",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Adductor Magnus Stretch"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell squat",
    "gif": "/gif/gluteo-cuadriceps/BARBELL-SQUAT-unscreen.gif",
    "series": "3x4",
    "nombre_español": "BARBELL SQUAT",
    "descripcion": "Ejercicio para glúteos y cuádriceps: BARBELL SQUAT"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "bodyweight sumo squat",
    "gif": "/gif/gluteo-cuadriceps/BODYWEIGHT-SUMO-SQUAT-unscreen.gif",
    "series": "3x4",
    "nombre_español": "BODYWEIGHT SUMO SQUAT",
    "descripcion": "Ejercicio para glúteos y cuádriceps: BODYWEIGHT SUMO SQUAT"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "band lying hip external rotation",
    "gif": "/gif/gluteo-cuadriceps/Band-Lying-Hip-External-Rotati-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Band Lying Hip External Rotation",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Band Lying Hip External Rotation"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "band seated hip external rotation",
    "gif": "/gif/gluteo-cuadriceps/Band-Seated-Hip-External-Rotat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Band Seated Hip External Rotation",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Band Seated Hip External Rotation"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "band seated hip internal rotation",
    "gif": "/gif/gluteo-cuadriceps/Band-Seated-Hip-Internal-Rotat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Band Seated Hip Internal Rotation",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Band Seated Hip Internal Rotation"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "band side lying clam",
    "gif": "/gif/gluteo-cuadriceps/Band-Side-Lying-Clam-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Band Side Lying Clam",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Band Side Lying Clam"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "band side lying leg lift",
    "gif": "/gif/gluteo-cuadriceps/Band-Side-Lying-Leg-Lift-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Band Side Lying Leg Lift",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Band Side Lying Leg Lift"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "banded donkey kicks",
    "gif": "/gif/gluteo-cuadriceps/Banded-Donkey-Kicks-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Banded Donkey Kicks",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Banded Donkey Kicks"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "banded fire hydrant",
    "gif": "/gif/gluteo-cuadriceps/Banded-Fire-Hydrant-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Banded Fire Hydrant",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Banded Fire Hydrant"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "banded glute bridge",
    "gif": "/gif/gluteo-cuadriceps/Banded-Glute-Bridge-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Banded Glute Bridge",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Banded Glute Bridge"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "banded glute kickbacks",
    "gif": "/gif/gluteo-cuadriceps/Banded-Glute-Kickbacks-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Banded Glute Kickbacks",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Banded Glute Kickbacks"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "banded kettlebell goblet squat",
    "gif": "/gif/gluteo-cuadriceps/Banded-Kettlebell-Goblet-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Banded Kettlebell Goblet Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Banded Kettlebell Goblet Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "banded seated hip abduction",
    "gif": "/gif/gluteo-cuadriceps/Banded-Seated-Hip-Abduction-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Banded Seated Hip Abduction",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Banded Seated Hip Abduction"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "banded single leg glute bridge",
    "gif": "/gif/gluteo-cuadriceps/Banded-Single-Leg-Glute-Bridge-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Banded Single Leg Glute Bridge",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Banded Single Leg Glute Bridge"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "banded standing glute kickback",
    "gif": "/gif/gluteo-cuadriceps/Banded-Standing-Glute-Kickback-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Banded Standing Glute Kickback",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Banded Standing Glute Kickback"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "banded step up",
    "gif": "/gif/gluteo-cuadriceps/Banded-Step-up-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Banded Step up",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Banded Step up"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "banded thigh fly",
    "gif": "/gif/gluteo-cuadriceps/Banded-Thigh-Fly-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Banded Thigh Fly",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Banded Thigh Fly"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "banded walk",
    "gif": "/gif/gluteo-cuadriceps/Banded-Walk-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Banded Walk",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Banded Walk"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell deadlift",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Deadlift-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Deadlift",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Deadlift"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell glute bridge two legs on bench",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Glute-Bridge-Two-Legs--unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Glute Bridge Two Legs on Bench",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Glute Bridge Two Legs on Bench"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell glute bridge",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Glute-Bridge-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Glute Bridge",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Glute Bridge"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell good morning",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Good-Morning-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Good Morning",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Good Morning"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell hack squat",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Hack-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Hack Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Hack Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell hip thrust",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Hip-Thrust-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Hip Thrust",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Hip Thrust"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell jump squat",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Jump-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Jump Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Jump Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell lateral lunge",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Lateral-Lunge-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Lateral Lunge",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Lateral Lunge"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell pin squat",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Pin-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Pin Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Pin Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell romanian deadlift",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Romanian-Deadlift-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Romanian Deadlift",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Romanian Deadlift"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell single leg deadlift",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Single-Leg-Deadlift-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Single Leg Deadlift",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Single Leg Deadlift"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell single leg hip thrust",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Single-Leg-Hip-Thrust-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Single Leg Hip Thrust",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Single Leg Hip Thrust"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell step up",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Step-Up-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Step Up",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Step Up"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell sumo deadlift",
    "gif": "/gif/gluteo-cuadriceps/Barbell-Sumo-Deadlift-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell Sumo Deadlift",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell Sumo Deadlift"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "barbell sumo squat",
    "gif": "/gif/gluteo-cuadriceps/Barbell-sumo-squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Barbell sumo squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Barbell sumo squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "bench glute flutter kicks",
    "gif": "/gif/gluteo-cuadriceps/Bench-Glute-Flutter-Kicks-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Bench Glute Flutter Kicks",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Bench Glute Flutter Kicks"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "bird dog",
    "gif": "/gif/gluteo-cuadriceps/Bird-Dog-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Bird Dog",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Bird Dog"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "bodyweight box squat",
    "gif": "/gif/gluteo-cuadriceps/Bodyweight-Box-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Bodyweight Box Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Bodyweight Box Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "bodyweight bulgarian split squat",
    "gif": "/gif/gluteo-cuadriceps/Bodyweight-Bulgarian-Split-Squ-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Bodyweight Bulgarian Split Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Bodyweight Bulgarian Split Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "bodyweight plie squat",
    "gif": "/gif/gluteo-cuadriceps/Bodyweight-Plie-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Bodyweight Plie Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Bodyweight Plie Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "bodyweight single leg deadlift",
    "gif": "/gif/gluteo-cuadriceps/Bodyweight-Single-Leg-Deadlift-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Bodyweight Single Leg Deadlift",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Bodyweight Single Leg Deadlift"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "box jump 1 to 2",
    "gif": "/gif/gluteo-cuadriceps/Box-Jump-1-to-2-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Box Jump 1 to 2",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Box Jump 1 to 2"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "box jump 2 to 1",
    "gif": "/gif/gluteo-cuadriceps/Box-Jump-2-to-1-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Box Jump 2 to 1",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Box Jump 2 to 1"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "box jump to pistol squat",
    "gif": "/gif/gluteo-cuadriceps/Box-Jump-to-Pistol-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Box Jump to Pistol Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Box Jump to Pistol Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "box pistol squat",
    "gif": "/gif/gluteo-cuadriceps/Box-pistol-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Box pistol Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Box pistol Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "bridge hip abduction",
    "gif": "/gif/gluteo-cuadriceps/Bridge-Hip-Abduction-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Bridge Hip Abduction",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Bridge Hip Abduction"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "bulgarian jump squat",
    "gif": "/gif/gluteo-cuadriceps/Bulgarian-Jump-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Bulgarian Jump Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Bulgarian Jump Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "butterfly stretch",
    "gif": "/gif/gluteo-cuadriceps/Butterfly-Stretch-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Butterfly Stretch",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Butterfly Stretch"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "cable donkey kickback",
    "gif": "/gif/gluteo-cuadriceps/Cable-Donkey-Kickback-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Cable Donkey Kickback",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Cable Donkey Kickback"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "cable forward lunge",
    "gif": "/gif/gluteo-cuadriceps/Cable-Forward-Lunge-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Cable Forward Lunge",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Cable Forward Lunge"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "cable front squat",
    "gif": "/gif/gluteo-cuadriceps/Cable-Front-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Cable Front Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Cable Front Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "cable hip abduction",
    "gif": "/gif/gluteo-cuadriceps/Cable-Hip-Abduction-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Cable Hip Abduction",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Cable Hip Abduction"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "cable hip extension",
    "gif": "/gif/gluteo-cuadriceps/Cable-Hip-Extension-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Cable Hip Extension",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Cable Hip Extension"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "cable hips adduction",
    "gif": "/gif/gluteo-cuadriceps/Cable-Hips-Adduction-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Cable Hips Adduction",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Cable Hips Adduction"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "cable kneeling pull through",
    "gif": "/gif/gluteo-cuadriceps/Cable-Kneeling-Pull-Through-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Cable Kneeling Pull Through",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Cable Kneeling Pull Through"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "cable pull through",
    "gif": "/gif/gluteo-cuadriceps/Cable-Pull-Through-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Cable Pull Through",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Cable Pull Through"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "cable squat",
    "gif": "/gif/gluteo-cuadriceps/Cable-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Cable Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Cable Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "cossack squat",
    "gif": "/gif/gluteo-cuadriceps/Cossack-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Cossack Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Cossack Squat"
  },
  {
    "grupo": "Glúteos-Cuádriceps",
    "nombre": "curtsey squat",
    "gif": "/gif/gluteo-cuadriceps/Curtsey-Squat-unscreen.gif",
    "series": "3x4",
    "nombre_español": "Curtsey Squat",
    "descripcion": "Ejercicio para glúteos y cuádriceps: Curtsey Squat"
  }
]

# Apply translations
for exercise in data:
    exercise_name = exercise["nombre"].lower()
    if exercise_name in translations:
        exercise["nombre_español"] = translations[exercise_name]
    else:
        # If no translation found, keep the current value
        print(f"No translation found for: {exercise_name}")

# Output the translated JSON
with open('ejercicios_traducidos.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Translation completed! Check 'ejercicios_traducidos.json'")