import ContributorCard from "./components/ContributorCard"

export default function Contributors() {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <h1 className='m-5 pt-5 heading'>Current Students (Spring 2026)</h1>
            </div>
            <div className='d-flex justify-content-evenly flex-wrap'>
                <ContributorCard id='0'></ContributorCard>
                <ContributorCard id='1'></ContributorCard>
                <ContributorCard id='0'></ContributorCard>
                <ContributorCard id='1'></ContributorCard>
                <ContributorCard id='0'></ContributorCard>
                <ContributorCard id='0'></ContributorCard>
            </div>
        </div>
    )
}