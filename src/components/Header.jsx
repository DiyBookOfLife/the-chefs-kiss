import chefLogo from "../assets/chef-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefLogo} alt="Chef's Kiss Logo"/>
            <h1>The Chef's Kiss</h1>
        </header>
    )
}