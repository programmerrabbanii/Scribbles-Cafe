import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <div className='border'>
            <div className='flex justify-between items-center px-4 mt-4'>
                <h3 className='text-3xl  '>Knowledge Cafe</h3>
                <img className='mb-3' src={profile} alt="" />
            </div>
            
            
        </div>
    );
};

export default Header;