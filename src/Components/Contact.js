export const Contact = () => {
  return (
    <div>
        <h1 className="font-bold text-center text-3xl m-4 p-4">Contact Us Page</h1>
        <form>
            <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="Enter Your Name"/>
            <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="Enter Your Message"/>
            <button className="bg-green-100 border border-black p-2 m-2 rounded-lg hover:bg-green-200">Submit</button>
        </form>
    </div>
  )
};
