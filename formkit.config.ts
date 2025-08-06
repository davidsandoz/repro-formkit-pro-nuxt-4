import { genesisIcons } from '@formkit/icons';
import { rootClasses } from './formkit.theme';
import { defineFormKitConfig } from '@formkit/vue';
import { createProPlugin, inputs } from '@formkit/pro';

const pro = createProPlugin('[replace with pro key]', inputs);

export default defineFormKitConfig(() => ({
  plugins: [pro],
  icons: { ...genesisIcons },
  config: { rootClasses },
}));
