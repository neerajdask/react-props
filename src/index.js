import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail
                    author='Sam'
                    timeAgo='Today at 4:00pm'
                    content='Nice blog mahn!'
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Alex'
                    timeAgo='Yesterday'
                    content='Insightful'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Mike'
                    timeAgo='Yesterday'
                    content='Meh!'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
