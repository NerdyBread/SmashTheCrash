import ContributorCard from "./components/ContributorCard"

export default function Contributors() {
    return (
        <div className='pt-5'>
            <div className='d-flex justify-content-center'>
                <h1 className='m-5 pt-5 heading'>Spring 2026 Course Team</h1>
            </div>
            <div className='d-flex justify-content-evenly flex-wrap'>
                <ContributorCard id='2'></ContributorCard>
                <ContributorCard id='0'></ContributorCard>
                <ContributorCard id='1'></ContributorCard>
                <ContributorCard id='3'></ContributorCard>
                <ContributorCard id='4'></ContributorCard>
            </div>
        </div>
    )
}