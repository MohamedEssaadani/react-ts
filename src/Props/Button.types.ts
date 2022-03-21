export type ButtonProps = {
    // function of type get no params and return nothing
    // handleClick: () => void
    // fct of type accept event => mouse event => button click
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id: number) => void
}

