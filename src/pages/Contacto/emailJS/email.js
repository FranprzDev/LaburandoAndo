import emailjs from '@emailjs/browser';

export const sendEmail = (nombreApellido, correo) => {
let templateParams = {
    from_name: "LaburandoAndo",
    nombreApellido: nombreApellido,
    destinatario: correo,
    message: "Gracias por comunicarte con nosotros y formar parte de nuestra plataforma"
  };

  emailjs.send('service_6v2u03o', 'template_4bpkd6v', templateParams,{publicKey: 'OxrGU-cI0SpRng_Xg'}).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
}