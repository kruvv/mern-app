import React, { useState, useContext, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LinkCard } from '../../components/link-card/LinkCard';
import { Loader } from '../../components/loader/Loader';
import { AuthContext } from '../../context/AuthContext';
import { useHttp } from '../../hooks/http.hook';


export const DetailPage = () => {

    const {token} = useContext(AuthContext)
    const [link, setLink] = useState(null);
    const { request, loading } = useHttp();
    const linkId = useParams().id

    const getLink = useCallback(
        async () => {
            try {
                const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
                    Authorization: `Bearer ${token}`
                })
                setLink(fetched);
            } catch (error) {

            }
        },
        [token, linkId, request],
    );

    useEffect(() => {
        getLink();
    }, [getLink]);

    if (loading) {
        return <Loader />
    }

    return (
        <>
           { !loading && link && <LinkCard link={link} /> }
        </>
    )
}
