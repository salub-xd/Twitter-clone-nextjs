import { UserInfo } from '@/components/user-info';
import { currentUser } from '@/lib/auth';
import React from 'react'

const AccountPage = async () => {

    const user = await currentUser();

    return (
        <UserInfo
            label={'Account information'}
            user={user}
        />
    )
}

export default AccountPage;