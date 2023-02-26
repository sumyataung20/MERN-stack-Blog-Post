export default function CommentsList({ comments }) {
     return (
          <>
               <h3 className="sm: text-2xl text-xl font-bold my-6 text-grey-900">
                    Comments
               </h3>

               {comments.map((comment, index) => {
                    return (
                         <div key={index}>
                              <h4 className="text-xl font-bold">
                                   {comment.username}
                              </h4>
                              <p className="mt-1 mb-4">{comment.text}</p>
                         </div>
                    );
               })}
          </>
     );
}