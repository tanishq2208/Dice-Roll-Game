import Die from './Die'

export default function Dice({dice}) {
    return (
        <div>
            {dice.map((v, i) => <Die val={v} />
        )}
        </div>
    );
}