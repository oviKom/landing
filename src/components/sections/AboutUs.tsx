import { ReactElement } from "react"
import { TEAM } from "../../conf/Team"

const AboutUs: React.FC = (): ReactElement => {
    return (
        <>
            <section className={'flex flex-col py-[72px] default-padding'}>
                <div className={'text-center flex flex-col justify-center items-center w-full'}>
                    <h2 className={'text-black text-[52px] font-bold mb-16'}>Csapatunk</h2>
                    <div className={'text-custom-gray font-semibold text-center'}>
                        Lelkes start upperek vagyunk. Színes társaság, <br />
                        a legkülönbözőbb motivációkkal és tudással. A cél azonban közös.
                    </div>
                </div>
            </section>

            <section className={'flex flex-col py-[72px] px-0 2xl:px-[300px]'}>
                <div className={'grid grid-cols-3'}>
                    {TEAM.map((member, index) => <div className={`${index === 0 ? 'row-span-2' : ''} relative flex justify-center items-center`}>
                        <img className={'z-10 w-full h-full'} src={member.image} />
                        <div className={'absolute z-20 text-white font-bold bottom-6'}>{member.name}</div>
                    </div>)}
                </div>
            </section>
        </>
    )
}

export default AboutUs