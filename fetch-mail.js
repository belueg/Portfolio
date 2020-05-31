(() => {
   const submit = document.getElementById('submitButton')

   submit.addEventListener('click', e => {
      e.preventDefault()
      fetchMail()
   });
}
)()


async function fetchMail() {
   const message = document.getElementById('message')
   const name = document.getElementById('name')
   const email = document.getElementById('email')
   const url = 'https://routemails.herokuapp.com/mailer';
   const bodyMsg = {
      name: name.value,
      email: email.value,
      message: message.value
   }
   if (!name.value || !email.value || !message.value) return console.log('no')
   try {
      const data = await fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(bodyMsg)
      })
      const dataJSON = await data.json()
      if (!data.ok) return  Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!' })


      Swal.fire({
         text: 'Thank you for your message',
         imageUrl: 'https://i.ibb.co/CtGvQq6/unnamed.jpg',
         imageWidth: 400,
         imageHeight: 200,
         imageAlt: 'Custom image',
       })

       name.value = "",
       email.value ="",
       message.value=""

   } catch (error) {
      swal('Sorry', "There was an error, try it later.", "error");
   }
}

