import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsIcon from '@mui/icons-material/Settings';

import { green } from '@mui/material/colors';

export const navbarMenu = [
    {
        name: 'Home',
        icon: <HomeIcon sx={{ color: green[400] }} />
    },
    {
        name: 'Tenants',
        icon: <GroupIcon sx={{ color: green[400] }} />
    },
    {
        name: 'Tenant Profiles',
        icon: <ManageAccountsIcon sx={{ color: green[400] }} />
    },
    {
        name: 'Dashboard Components',
        icon: <WidgetsIcon sx={{ color: green[400] }} />
    },
    {
        name: 'System Settings',
        icon: <SettingsIcon sx={{ color: green[400] }} />
    }
]