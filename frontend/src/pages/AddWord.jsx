import React, { useState } from 'react'
import Header from '../components/Header'
import InputFields from '../components/InputFields';
import axios from 'axios';


export default function AddWord() {

  const [word,setWord] = useState('');
  const [nSingular,setNsingular] = useState('');
  const [nPlural,setNplural] = useState('');
  const [nMeaning,setNmeaning] = useState('');
  const [vSingular,setVsingular] = useState('');
  const [vPlural,setVplural] = useState('');
  const [vmeaning,setVmeaning] = useState('');
  const [sp,setSp] = useState('');
  const [pc,setPc] = useState('');
  const [pp,setPp] = useState('');
  const [ppc,setPpc] = useState('');
  const [sPa,setSpa] = useState('');
  const [pac,setPac] = useState('');
  const [pap,setPap] = useState('');
  const [papc,setPapc] = useState('');
  const [sf,setSf] = useState('');
  const [fc,setFc] = useState('');
  const [fp,setFp] = useState('');
  const [fpc,setFpc] = useState('');

  const handleAddWord = () => {
    axios.post('',{word,nSingular,nPlural,nMeaning,vSingular,vPlural,vmeaning,sp,pc,pp,ppc,sPa,pac,pap,papc,sf,fc,fp,fpc})
  }
  
  return (
    <div>
      <Header/>
      <div className='flex justify-center mt-10'>
            <div className='flex flex-col  p-[10px] rounded-xl  bg-white shadow-xl  gap-5 w-[320px]'>
              <h1 className='self-center mb-5 text-2xl font-bold text-bluecolor'>Add Word</h1>  
              <form onSubmit={handleAddWord}>
              <InputFields label="Word" type="text" name="word" onChange={(e) => setWord(e.target.value)} required />
                <div className=' w-[300px] bg-bluebg  rounded-2xl p-3 mb-5'>
                  <div className='flex'>
                    <div className='text-lg font-semibold'>
                      <h3>Noun</h3>
                    </div>
                  </div>
                  <InputFields label="Singular" type="text" name="Nsingular" onChange={(e) => setNsingular(e.target.value)} required />
                  <InputFields label="Plural" type="text" name="Nplural"  onChange={(e) => setNplural(e.target.value)} required />
                  <InputFields label="M" type="text" name="Nmeaning"  onChange={(e) => setNmeaning(e.target.value)} required />
                </div>
                {/* verb section */}
                <div className=' w-[300px] bg-bluebg  rounded-2xl p-3 '>
                  <div className='flex'>
                    <div className='text-lg font-semibold'>
                      <h3>Verb</h3>
                    </div>
                  </div>
                  <InputFields label="Singular" type="text" name="Vsingular"  onChange={(e) => setVsingular(e.target.value)} />
                  <InputFields label="Plural" type="text" name="Vplural"  onChange={(e) => setVplural(e.target.value)}  />
                  <InputFields label="M" type="text" name="Vmeaning"  onChange={(e) => setVmeaning(e.target.value)}  />
                  <InputFields label="SP" type="text" name="sp"  onChange={(e) => setSp(e.target.value)}  />
                  <InputFields label="PC" type="text" name="pc"  onChange={(e) => setPc(e.target.value)}  />
                  <InputFields label="PP" type="text" name="pp"  onChange={(e) => setPp(e.target.value)}  />
                  <InputFields label="PPC" type="text" name="ppc"  onChange={(e) => setPpc(e.target.value)}  />
                  <InputFields label="SPa" type="text" name="spa"  onChange={(e) => setSpa(e.target.value)}  />
                  <InputFields label="PaC" type="text" name="pac"  onChange={(e) => setPac(e.target.value)}  />
                  <InputFields label="PaP" type="text" name="pap"  onChange={(e) => setPap(e.target.value)}  />
                  <InputFields label="PaPC" type="text" name="papc"  onChange={(e) => setPapc(e.target.value)}  />
                  <InputFields label="SF" type="text" name="sf"  onChange={(e) => setSf(e.target.value)}  />
                  <InputFields label="FC" type="text" name="fc"  onChange={(e) => setFc(e.target.value)}  />
                  <InputFields label="FP" type="text" name="fp"  onChange={(e) => setFp(e.target.value)}  />
                  <InputFields label="FPC" type="text" name="fpc"  onChange={(e) => setFpc(e.target.value)}  />
                </div>
                <div className='flex justify-center mt-3'>
                  <div className='h-8 w-[120px] bg-bluecolor rounded-full'>
                    <button type="submit" className='w-full h-full text-lg font-bold text-white '>Add </button>
                  </div>             
                </div>
              </form>
          </div>
        </div>
    </div>
  )
}
