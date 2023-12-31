import React from 'react'

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className=' text-black bg-white h-[500px] flex-col justify-center text-center px-52 space-y-10 py-11'>
        <div className='space-y-4'>
            <p className='text-3xl font-bold'>Gambaran umum</p>
            <p className='font-extralight'>Himpunan Mahasiswa Teknik Informatika (HMIF) - Institut Teknologi Indonesia merupakan organisasi mahasiswa program studi Teknik Informatika di Institut Teknologi Indonesia yang bertujuan mengembangkan potensi mahasiswa Teknik Informatika dengan berlandaskan Tri Dharma Perguruan Tinggi</p>
        </div>
        <div>
            <p className='text-base text-gray-500 uppercase font-bold'>Tujuan</p>
            <p  className='text-3xl font-bold pb-10'>Melangkah Bersama Menuju Kemajuan</p>
            <p className='font-extralight'>Menjadikan HMIF sebagai wadah bagi anggota maupun calon anggota untuk mengembangkan diri dalam bidang akademik maupun non akademik dan menjadikan HMIF ITI menjadi organisasi yang aktif solutif dan produkif secara internal maupun eksternal demi terwujudnya Tri Dharma Perguruan Tinggi</p>
        </div>    
    </div>
  )
}

export default Profile  