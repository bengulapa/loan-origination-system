import { Button, Grid2, Stack, TextField } from '@mui/material';
import { PropertyType } from '../../models/enums';
import { Asset, Liability } from '../../models/classes';
import { formatCurrency } from '../../utils/formatters';
import { useEffect, useState } from 'react';

interface IProps {
  propertyType: PropertyType;
}

const AssetAndLiabilities = ({ propertyType }: IProps) => {
  const [defaultAsset, setDefaultAsset] = useState<Asset | null>(null);
  const [defaultLiability, setDefaultLiability] = useState<Liability | null>(null);

  const canSave = defaultLiability !== null;
  const canAdd = [PropertyType.Renting, PropertyType.Boarding].includes(propertyType);

  useEffect(() => {
    setDefaultAsset(
      propertyType === PropertyType.Owning
        ? new Asset('Property-Occupied', '', 0)
        : new Asset('Cash at Bank', '', 0)
    );

    setDefaultLiability(
      propertyType === PropertyType.OwningWithMortgage ? new Liability('Mortgage', '', 0) : null
    );
  }, [propertyType]);

  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <Stack spacing={2}>
            {defaultAsset && (
              <>
                <TextField label='Asset type' fullWidth defaultValue={defaultAsset?.type} />
                <TextField label='Description' fullWidth defaultValue={defaultAsset?.description} />
                <TextField
                  label='Value'
                  fullWidth
                  defaultValue={formatCurrency(defaultAsset?.value || 0)}
                />
              </>
            )}

            <div className='flex justify-center gap-2 pb-4 border-b'>
              <Button variant='outlined' size='small'>
                Save asset
              </Button>

              {canAdd && (
                <Button variant='outlined' size='small' color='secondary'>
                  Add an Asset
                </Button>
              )}
            </div>
          </Stack>
        </Grid2>
        {propertyType !== 'Owning' && (
          <Grid2 size={6}>
            <Stack spacing={2}>
              {canSave && (
                <>
                  <TextField
                    label='Liability type'
                    fullWidth
                    defaultValue={defaultLiability.type}
                  />
                  <TextField
                    label='Description'
                    fullWidth
                    defaultValue={defaultLiability.description}
                  />
                  <TextField
                    label='Amount Owed'
                    fullWidth
                    defaultValue={formatCurrency(defaultLiability.amountOwed || 0)}
                  />
                </>
              )}

              <div className='flex justify-center gap-2 pb-4 border-b'>
                {canSave && (
                  <Button variant='outlined' size='small'>
                    Save liability
                  </Button>
                )}

                {canAdd && (
                  <Button variant='outlined' size='small' color='secondary'>
                    Add a Liability
                  </Button>
                )}
              </div>
            </Stack>
          </Grid2>
        )}
      </Grid2>
    </>
  );
};

export default AssetAndLiabilities;
