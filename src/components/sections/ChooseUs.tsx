import { ReactElement } from "react"
import { SOLUTIONS } from "../../conf/Solutions"
import Card from "../Card"

const ChooseUs: React.FC = (): ReactElement => {
    return (
        <section className={'flex flex-col py-[72px] default-padding'}>
            <div className={'text-center flex flex-col justify-center items-center w-full'}>
                <h2 className={'text-black text-[52px] font-bold mb-16'}>Miért minket válassz?</h2>
                <div className={'grid grid-cols-3 gap-6'}>
                    {SOLUTIONS.map(solution => <Card title={solution.title} description={solution.description} icon={solution.icon} variant={'primary'} />)}
                </div>
            </div>
        </section>
    )
}

export default ChooseUs