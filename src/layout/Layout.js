
import NavigationBar from '../components/NavigationBar';

function Layout(props) {

    return <div>
        <NavigationBar />
        <main>
            {props.children}
        </main>
    </div>
}

export default Layout;