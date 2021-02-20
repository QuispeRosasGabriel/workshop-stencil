export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export type Color = 'green1' | 'green2' | 'green3' | 'green4' | 'green5' |
                    'blue1' | 'blue2' | 'blue3' | 'blue4' | 'blue5' |
                    'beige1' | 'beige2' | 'beige3' | 'beige4' | 'beige5' |
                    'yellow1' | 'yellow2' | 'yellow3' | 'yellow4' | 'yellow5' |
                    'lightblue1' | 'lightblue2' | 'lightblue3' | 'lightblue4' | 'lightblue5' |
                    'darkblue1' | 'darkblue2' | 'darkblue3' | 'darkblue4' | 'darkblue5' |
                    'grey1' | 'grey2' | 'grey3' | 'grey4' | 'grey5' |
                    'watermelon1' | 'watermelon2' | 'watermelon3' | 'watermelon4' | 'watermelon5' |
                    'success' | 'alert' | 'error' | 'info' | 'successlight' | 'alertlight' | 'errorlight' | 'infolight' |
                    'dark' | 'white' | 'none' | 'inherit';