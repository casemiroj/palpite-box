import React from 'react'

const Pesquisa = () => {
    return (
        <div className='pt-6'>
            <h1 className='text-center font-bold my-4 text-2xl'>Criticas e Sugestões</h1>
            <p className='text-center mb-6'>
                O restaurante X sempre busca por atender melhor seus clientes.<br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião. 
            </p>
            <div className='w-6/12 mx-auto mb-6' >
                <label className='font-bold'>Seu nome:</label>
                <input className='bg-blue-100 p-5 shadow-md my-2 rounded block w-full'  type="text" />

                <label className='font-bold'>Email:</label>
                <input className='bg-blue-100 p-5 shadow-md my-2 rounded block w-full'  type="text" />

                <label className='font-bold'>Whatsapp:</label>
                <input className='bg-blue-100 p-5 shadow-md my-2 rounded block w-full'  type="text" />

                <label className='font-bold'>Sua critica ou sugestão:</label>
                <input className='bg-blue-100 p-5 shadow-md my-2 rounded block w-full'  type="text" />
            </div>
        </div>
    )
}

export default Pesquisa