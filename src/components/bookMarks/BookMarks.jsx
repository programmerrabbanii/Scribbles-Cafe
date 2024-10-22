import Bookmar from "../bookmar/Bookmar";

const BookMarks = ({book,readTime}) => {
    
    return (
        <div className="w-1/3">
            <div className="bg-slate-200 ml-4 ">
            <h3 className="font-semibold text-center text-purple-600 mb-4 py-2 shadow-xl">Reading Times: {readTime}</h3>

            </div>
           <div className=" bg-slate-300 ml-4 py-2">
           <h3 className="text-2xl font-semibold text-center">This is Book Marks: {book.length}</h3>

{
    book.map(marks=> <Bookmar key={marks.id} marks={marks}></Bookmar>)
}
           </div>
            
        </div>
    );
};

export default BookMarks;