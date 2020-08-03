import React from 'react'
import { createMemoryHistory, Router, Route } from 'react-router'
import { BreadcrumbRender } from '../../../components/breadcrumb';

const history = createMemoryHistory()

const App = (props) => {
    return (
        <div>
            <BreadcrumbRender
                routes = {[{ name: 'home', path: '/home' }, { name: 'about', path: '/about' }]}
                style = {{ background: 'dedede' }}
            />
            {props.children}
        </div>
    )
}
const About = () => <h1>about page</h1>
const Home = () => <h1>home page</h1>

export default function Breadcrumb () {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
            </Route>
        </Router>
    )
}
