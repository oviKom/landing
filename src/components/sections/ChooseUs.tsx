import { ReactElement } from "react"
import { SOLUTIONS } from "../../conf/Solutions"
import Card from "../Card"

const ChooseUs: React.FC = (): ReactElement => {
    return (
        <section className={'flex flex-col pt-[72px] pb-[144px] default-padding'}>
            <div className={'text-center flex flex-col justify-center items-center w-full'}>
                <h2 className={'section-title mb-16'}>Miért minket válassz?</h2>
                <div className={'grid lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-20'}>
                    {SOLUTIONS.map((solution, index) => <Card
                        className={index === SOLUTIONS.length - 1 && SOLUTIONS.length % 2 !== 0 ? 'col-span-1 lg:col-span-2 xl:col-span-1' : ''}
                        title={solution.title}
                        description={solution.description}
                        icon={solution.icon}
                        variant={'primary'} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default ChooseUs