
const Bookmar = ({marks}) => {
    const {title}=marks
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
            <h2 className="text-2xl">{title}</h2>
            
        </div>
    );
};

export default Bookmar;