import type { Flashcard } from '../types';

export const flashcardDecks: Record<string, Flashcard[]> = {
  'Óxidos': [
    { question: '¿Qué es un óxido?', answer: 'Un compuesto químico que contiene uno o más átomos de oxígeno y otro elemento.' },
    { question: '¿Cómo se forma un óxido básico?', answer: 'Se forma por la combinación de un metal con oxígeno.' },
    { question: '¿Cómo se forma un óxido ácido (anhídrido)?', answer: 'Se forma por la combinación de un no metal con oxígeno.' },
    { question: 'Fórmula del óxido de hierro (III)', answer: 'Fe₂O₃' },
  ],
  'Hidruros': [
    { question: '¿Qué es un hidruro?', answer: 'Un compuesto formado por hidrógeno y otro elemento, que puede ser metal o no metal.' },
    { question: '¿Cómo se forma un hidruro metálico?', answer: 'Se forma por la combinación de un metal con hidrógeno.' },
    { question: '¿Cómo se nombra el compuesto LiH?', answer: 'Hidruro de litio.' },
    { question: '¿Qué tipo de enlace tienen los hidruros metálicos?', answer: 'Enlace iónico.' },
  ],
  'Hidróxidos': [
    { question: '¿Qué es un hidróxido o base?', answer: 'Un compuesto formado por un metal y uno o más iones hidroxilo (OH⁻).' },
    { question: '¿Cómo se forma un hidróxido?', answer: 'Reaccionando un óxido básico con agua.' },
    { question: '¿Cuál es la fórmula del hidróxido de sodio?', answer: 'NaOH' },
    { question: '¿Qué pH tienen las disoluciones de hidróxidos?', answer: 'Un pH mayor que 7 (básico o alcalino).' },
  ],
  'Ácidos': [
    { question: '¿Qué es un ácido?', answer: 'Una sustancia que puede donar un protón (H⁺) o aceptar un par de electrones.' },
    { question: '¿Cómo se forma un oxácido?', answer: 'Reaccionando un óxido ácido (anhídrido) con agua.' },
    { question: '¿Cuál es la fórmula del ácido sulfúrico?', answer: 'H₂SO₄' },
    { question: '¿Qué es un hidrácido?', answer: 'Un compuesto binario de hidrógeno con un no metal de los grupos 16 o 17.' },
  ],
  'Líneas y Puntos Notables': [
    { question: '¿Qué es la Mediana de un triángulo?', answer: 'Segmento que une un vértice con el punto medio del lado opuesto.' },
    { question: '¿Qué es la Altura de un triángulo?', answer: 'Segmento perpendicular trazado desde un vértice al lado opuesto.' },
    { question: '¿Qué es la Bisectriz de un triángulo?', answer: 'Recta que divide un ángulo interior en dos ángulos iguales.' },
    { question: '¿Qué es el Baricentro?', answer: 'Punto de intersección de las tres medianas. Es el centro de gravedad del triángulo.' },
    { question: '¿Qué es el Ortocentro?', answer: 'Punto de intersección de las tres alturas del triángulo.' },
    { question: '¿Qué es el Incentro?', answer: 'Punto de intersección de las tres bisectrices. Es el centro de la circunferencia inscrita.' },
  ],
  'Tipos de Triángulos': [
    { question: '¿Qué es un triángulo Equilátero?', answer: 'Tiene sus tres lados y tres ángulos iguales.' },
    { question: '¿Qué es un triángulo Isósceles?', answer: 'Tiene dos lados iguales y uno desigual.' },
    { question: '¿Qué es un triángulo Escaleno?', answer: 'Tiene sus tres lados desiguales.' },
    { question: '¿Qué es un triángulo Rectángulo?', answer: 'Tiene un ángulo interior de 90 grados (recto).' },
    { question: '¿Qué es un triángulo Acutángulo?', answer: 'Sus tres ángulos interiores son agudos (menores de 90 grados).' },
    { question: '¿Qué es un triángulo Obtusángulo?', answer: 'Tiene un ángulo interior obtuso (mayor de 90 grados).' },
  ],
  'Cinemática': [
    { question: '¿Qué estudia la cinemática?', answer: 'Estudia el movimiento de los cuerpos sin atender a las causas que lo producen.' },
    { question: '¿Qué es la posición?', answer: 'Es la ubicación de un objeto en el espacio en relación a un punto de referencia.' },
    { question: '¿Qué es el desplazamiento?', answer: 'Es el cambio de posición de un cuerpo. Es una magnitud vectorial.' },
    { question: 'Diferencia entre distancia y desplazamiento', answer: 'La distancia es una magnitud escalar (longitud total recorrida), mientras que el desplazamiento es un vector (distancia en línea recta desde el inicio al fin).' },
  ],
  'MRU': [
    { question: '¿Qué significa MRU?', answer: 'Movimiento Rectilíneo Uniforme.' },
    { question: 'Características del MRU', answer: 'La trayectoria es una línea recta y la velocidad es constante (aceleración nula).' },
    { question: 'Fórmula principal del MRU', answer: 'x = x₀ + v * t (posición final = posición inicial + velocidad * tiempo)' },
    { question: 'En el MRU, ¿cómo es la gráfica posición-tiempo?', answer: 'Es una línea recta con una pendiente igual a la velocidad.' },
  ],
  'MRUV': [
    { question: '¿Qué significa MRUV?', answer: 'Movimiento Rectilíneo Uniforme Variado (o Acelerado).' },
    { question: 'Características del MRUV', answer: 'La trayectoria es una línea recta y la aceleración es constante y no nula.' },
    { question: 'Fórmula de la velocidad en MRUV', answer: 'v = v₀ + a * t (velocidad final = velocidad inicial + aceleración * tiempo)' },
    { question: 'Fórmula de la posición en MRUV', answer: 'x = x₀ + v₀*t + (1/2)*a*t²' },
  ],
};