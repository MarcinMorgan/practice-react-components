import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comments: [],
    }
    
    render() {
        const {title, body, content} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={ this.submitHandler }>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content"
                                    onChange={ this.changeHandler }
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz"/></div>
                    </form>
                    <ul>
                        { this.renderCommentList() }
                    </ul>
                </section>
            </article>
        )
    }

    changeHandler = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        const comment = this.state.content
        this.addComment(comment);
        this.setState({
            content: ''
        })
    }

    addComment(newComment) {
        this.setState({
            comments: [...this.state.comments, newComment],
        });
    }

    renderCommentList() {
        const comments = this.state.comments;
        return comments.map( comment => { 
            return (
                <li>{ comment }</li>
            )
        })
    }
}

root.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
