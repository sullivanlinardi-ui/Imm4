
import { useState } from 'react'

export default function App() {
  const [freelancers, setFreelancers] = useState([])
  const [form, setForm] = useState({
    nome:'',
    telefone:'',
    rg:'',
    cpf:'',
    pix:'',
    carro:'',
    placa:''
  })
  const [editing, setEditing] = useState(null)

  function salvar(){
    if(editing !== null){
      const updated = [...freelancers]
      updated[editing] = form
      setFreelancers(updated)
      setEditing(null)
    } else {
      setFreelancers([...freelancers, form])
    }

    setForm({
      nome:'',
      telefone:'',
      rg:'',
      cpf:'',
      pix:'',
      carro:'',
      placa:''
    })
  }

  function editar(index){
    setForm(freelancers[index])
    setEditing(index)
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Immersion Eventos</h1>

        <input placeholder="Nome"
          value={form.nome}
          onChange={e=>setForm({...form,nome:e.target.value})}
        />

        <input placeholder="Telefone"
          value={form.telefone}
          onChange={e=>setForm({...form,telefone:e.target.value})}
        />

        <input placeholder="RG"
          value={form.rg}
          onChange={e=>setForm({...form,rg:e.target.value})}
        />

        <input placeholder="CPF"
          value={form.cpf}
          onChange={e=>setForm({...form,cpf:e.target.value})}
        />

        <input placeholder="Chave Pix"
          value={form.pix}
          onChange={e=>setForm({...form,pix:e.target.value})}
        />

        <input placeholder="Modelo do carro"
          value={form.carro}
          onChange={e=>setForm({...form,carro:e.target.value})}
        />

        <input placeholder="Placa do carro"
          value={form.placa}
          onChange={e=>setForm({...form,placa:e.target.value})}
        />

        <button className="primary" onClick={salvar}>
          {editing !== null ? 'Atualizar Cadastro' : 'Salvar Freelancer'}
        </button>
      </div>

      <div className="card">
        <h2>Lista do Cliente</h2>

        {freelancers.map((f, index)=>(
          <div key={index} className="item">
            <strong>{f.nome}</strong><br/>
            Telefone: {f.telefone}<br/>
            RG: {f.rg}<br/>
            CPF: {f.cpf}<br/>
            Carro: {f.carro}<br/>
            Placa: {f.placa}<br/><br/>

            <button className="secondary" onClick={()=>editar(index)}>
              Editar Cadastro
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
