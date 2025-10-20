"use client";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const NavLogout = () => {
    const handleClick = () => {
        // Lógica de logout aqui
    };

    return (
        <Link
            href="/signin"
            onClick={handleClick}
            className={` cursor-pointer flex items-center gap-6 py-3 opacity-50 hover:opacity-100`}
        >
            <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="size-6"
            />
            <div className="text-lg">Sair</div>
        </Link>
    );
};
