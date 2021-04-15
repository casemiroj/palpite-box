import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
    const [ form, setForm ] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Sugestao: '',
        Nota: 0
    })

    const notas = [0, 1, 2, 3, 4, 5]

    const [ success, setSuccess ] = useState(false)
    const [ retorno, setRetorno ] = useState({})

    const save = async () =>{
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
        } catch (err) {
            console.log(err);
        }
    }

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa' />
            <h1 className='text-center font-bold my-4 text-2xl'>Criticas e Sugestões</h1>
            <p className='text-center mb-6'>
                O restaurante X sempre busca por atender melhor seus clientes.<br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião. 
            </p>
            
        { !success && 
            <div className='w-6/12 mx-auto mb-6' >
                <input className='bg-blue-50 p-6 my-4 rounded block w-full' placeholder='Nome' type="text" onChange={onChange} name='Nome' value={form.Nome}/>
                <input className='bg-blue-50 p-6 my-4 rounded block w-full' placeholder='Email' type="text" onChange={onChange} name='Email' value={form.Email}/>
                <input className='bg-blue-50 p-6 my-4 rounded block w-full' placeholder='Whatsapp' type="text" onChange={onChange} name='Whatsapp' value={form.Whatsapp}/>
                <input className='bg-blue-50 p-6 my-4 rounded block w-full' placeholder='Opinião e/ou sugestão' type="text" onChange={onChange} name='Sugestao' value={form.Sugestao}/>

                <label className='font-bold'>Nota</label>
                <div className="flex justify-center py-6">
                { notas.map( nota => {
                    return (<label className='block w-1/12 text-center'>
                            { nota } <br/>
                            <input type="radio" name="Nota" value={nota} onChange={onChange} /> 
                        </label>)
                    })
                }
                </div>
                

                <button onClick={save} className='w-full bg-blue-500 px-12 py-4 font-bold rounded-lg text-white shadow-lg hover:bg-blue-700'>Salvar</button>
            </div>
        }

        { success && <div className='w-6/12 mx-auto mb-6'>
            <p className='mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 text-center'>Obrigado com contribur com sua sugestão e/ou critica</p>
            {
                retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                    Seu cupom: <br/>
                    <span className='font-bold text-4xl'>{retorno.Cupom}</span>
                    </div>
            }
             {
                retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                    <span className='font-bold block mb-2'>{retorno.Promo}</span>
                    <br/>
                    <p className='italic'>Tire um print ou foto desta tela e apresente na sua proxima compra</p>
                    </div>
            }
            </div>}
        </div>
    )
}

export default Pesquisa