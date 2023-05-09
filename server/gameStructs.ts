export interface Notification{
    gameId: string;
    requesterID: string;
    requesterColor: string;
    receiverID: string;
}




export interface User{
    id: string;
    username: string;
    last_seen: string;
    cat_url: string;
    notification: Notification[];
}

export interface Move{
    from: string;
    to: string;
    endFen: string;
}


export interface game{
    id: string;
    users: User[];
    moves: Move[];
    turn: string;
    fen: string;
}