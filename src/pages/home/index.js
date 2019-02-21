import React, {Component} from 'react';
import Button from '../../components/elements/button/button';
import Image from '../../components/elements/image/dog-image';
import Api from '../../components/lib/fetch/api';
import ReactDOM from "react-dom";

class Home extends Component {
    fetchApi(method, url, payload, body) {
        Api({method, url, payload, body}).then((res) => {
            console.log(res);
            if (res.status === 'success') {
                const element = <Image
                    src={res.message}
                    className='some-image'
                />;
                ReactDOM.render(element, document.querySelector('.image-holder'));
            } else {
                const element = <p>Image not found</p>;
                ReactDOM.render(element, document.querySelector('.image-holder'));
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="home-container">
                <div className="container">
                    <Button
                        text='Submit'
                        type='submit'
                        onClick={() => this.fetchApi('GET', 'https://dog.ceo/api/breeds/image/random', {someKey: 'hi there'}, {})}
                        className='some-button'
                    />
                </div>
                <div className='image-holder'>
                </div>
            </div>
        );
    }
}

export default Home;
